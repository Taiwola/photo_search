"use client";
import { formatDate } from "../formatDate";

export default function Header() {
  const currentDate = formatDate();

  return (
    <header>
      <nav className="py-20 px-8 md:px-0 max-w-5xl mx-auto">
        <ul className="flex flex-col md:flex-row justify-between items-center">
          <li>
            <h5 className="font-bold text-[#9c9ca0] font-pacifico text-2xl">
              PhotoSearch.
            </h5>
          </li>
          <li>
            <p className="text-[#9c9ca0]">{currentDate}</p>
          </li>
        </ul>
      </nav>
    </header>
  );
}
