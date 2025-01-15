"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import SearchResults from "./searchResults";
import Loading from "./loading";



export default function SearchedComponent() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams?.get("search") || "default";

  return (
    <div className="mt-20"
    style={{
        minHeight: "calc(100vh - 200px)",
      }}
    >
      <h5 className="text-2xl text-[#9c9ca0] mb-8">
        Showing Results for <span className="font-bold border-b border-dotted capitalize">{searchQuery}</span>
      </h5>
      <Suspense fallback={<Loading />}>
        <SearchResults term={searchQuery} />
      </Suspense>
    </div>
  );
}
