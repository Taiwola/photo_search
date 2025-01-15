"use client"
import { useEffect, useState } from "react";
import Footer from "./footer";
import Header from "./header";
import Search from "./search";
import SearchedComponent from "./searchedComponent";
import {Circle} from "lucide-react"

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await new Promise((resolve) => setTimeout(resolve, 2000));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
        <div className="flex justify-center items-center h-96">
        <Circle className="w-12 h-12 animate-spin text-gray-500" />
      </div>
    )
  }
  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-1">
        <div className="px-8 md:px-0 max-w-5xl mx-auto">
           <Search />
        </div>
        
        <div className="px-8 md:px-0 max-w-5xl mx-auto">
          <SearchedComponent />
        </div>

        <div>
          <Footer />
        </div>
      </main>
      <div className="absolute inset-x-0 top-0 bottom-0 z-[-1] flex flex-col">
        <div className="h-[20%] bg-zinc-100"></div>
        <div className="h-[25%] bg-white"></div>
        <div className="h-[60%] bg-black"></div>
        </div>
    </div>
  );
}
