"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Search() {
  const [term, setTerm] = useState<string>(""); 
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const termFromUrl = searchParams.get("search");
    if (!termFromUrl) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("search", "manchester");
      router.push(`?${params.toString()}`);
    }
  }, [router, searchParams]); 



  function handleSearch(e: React.FormEvent) {
    e.preventDefault();

    if (term.trim()) {
      const params = new URLSearchParams(searchParams?.toString());
      params.set("search", term.trim());
      router.push(`?${params.toString()}`);
      setTerm("");
    } else {
      router.push("/");
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="flex gap-4 justify-between items-center">
          <input
            className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-blue-500 sm:text-sm/6"
            placeholder="Search...."
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />

          <button type="submit" className="rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 flex-shrink-0">Search</button>
        </div>
      </form>
    </div>
  );
}