"use client";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import SearchResults from "./searchResults";
import { Circle } from "lucide-react";



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
      <Suspense fallback={  <div className="flex justify-center items-center h-96">
        <Circle className="w-12 h-12 animate-spin text-gray-500" />
      </div>}>
        <SearchResults term={searchQuery} />
      </Suspense>
    </div>
  );
}
