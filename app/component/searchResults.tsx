import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { fetchRandomResults, fetchSearchResults } from "../api";
import Card from "./card";

export default function SearchResults({ term }: { term: string }) {
  const [result, setResults] = useState<Photo[]>([]);

  const { data, isLoading, isError, refetch } = useQuery(
    ["searchResults", term],
    () => fetchSearchResults(term),
    {
      enabled: !!term,
      suspense: true, 
    }
  );

  useEffect(() => {
    setResults(data.results); 
  }, [data])

  console.log(data.results);

  const handleClicked = async () => {
    try {
      const randomResults = await fetchRandomResults();
      setResults((prevResults) => [...prevResults, ...randomResults]);
    } catch (error) {
      console.error("Error fetching random results:", error);
    }
  };

  useEffect(() => {
    if (term) {
      refetch();
    }
  }, [term, refetch]);


  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-96">
        <span className="text-gray-500">Loading...</span>
      </div>
    );
  }

 
  if (isError) {
    return (
      <div className="flex justify-center items-center h-96">
        <span className="text-red-500">Error fetching data</span>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {result?.map((result: Photo) => (
          <div key={result.id}>
            <Card
              alt={result.description || result.user.username}
              likes={result.likes}
              profile_img={result.user.profile_image.small}
              username={result.user.username}
              url={result.urls.regular}
            />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mt-8">
        <button
          className="rounded-md text-sm font-semibold shadow-sm text-black bg-white border px-3 py-2 hover:bg-gray-500"
          onClick={handleClicked}
        >
          Load More
        </button>
      </div>
    </>
  );
}
