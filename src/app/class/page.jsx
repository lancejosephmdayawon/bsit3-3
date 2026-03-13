"use client";

import { useState } from "react";
import { ListFilter, Search } from "lucide-react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Studentcard from "@/layout/studentcard";

import { Students } from "@/const";

export default function ClassProfiles() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLetter, setActiveLetter] = useState("All");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const allStudents = [...Students.officers, ...Students.class].filter(
    (student) => student.name && student.name.trim() !== "",
  );

  const filteredStudents = allStudents.filter((student) => {
    const matchesSearch = student.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesLetter =
      activeLetter === "All" ||
      student.name.charAt(0).toUpperCase() === activeLetter;

    return matchesSearch && matchesLetter;
  });

  return (
    <div className="min-h-screen w-full bg-[#FFF8DE]/44 overflow-x-hidden flex flex-col">
      <Navbar />

      <div className="w-full px-5 pt-10 pb-5">
        <div className="max-w-[1400px] mx-auto bg-[url('/assets/42624.png')] bg-cover bg-center rounded-[40px] overflow-hidden shadow-lg relative h-[400px]">
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm flex flex-col items-center justify-center text-center px-5">
            <h1 className="text-6xl md:text-8xl font-serif font-extrabold text-[#FFF8DE] mb-2 drop-shadow-sm text-center">
              Class Profiles
            </h1>
            <p className="text-[#FFFFFF] text-lg md:text-xl font-medium italic drop-shadow-sm max-w-2xl mb-8 text-center leading-relaxed">
              Discover the people behind our block — each with their own story,
              <br className="hidden md:block" /> dreams, and unique spark.
            </p>

            <div className="relative w-full max-w-md group">
              <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                <Search
                  className="text-[#8A6E5D] group-focus-within:text-[#7FBF83] transition-colors"
                  size={20}
                />
              </div>
              <input
                type="text"
                placeholder="Search by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/40 backdrop-blur-md border border-white/50 text-[#8A6E5D] font-bold placeholder:text-[#8A6E5D]/60 rounded-full py-4 pl-12 pr-6 shadow-md focus:outline-none focus:ring-2 focus:ring-[#7FBF83] transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 px-5 flex-grow">
        {/* ALPHABET FILTER */}
        <div className="max-w-[1400px] mx-auto mb-12 flex items-center justify-start gap-3">
          <div className="relative">
            <select
              value={activeLetter}
              onChange={(e) => setActiveLetter(e.target.value)}
              className="appearance-none px-6 py-3 pr-10 rounded-full bg-[#F4F1EC] text-[#5A4A3F] font-medium shadow-sm border border-[#E5DED6] focus:outline-none focus:ring-2 focus:ring-[#7FBF83] hover:bg-[#EFEAE4] transition-all cursor-pointer">
              <option value="All">All</option>

              {alphabet.map((letter) => (
                <option key={letter} value={letter}>
                  {letter}
                </option>
              ))}
            </select>

            {/* Dropdown Icon */}
            <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#7FBF83]">
              ▼
            </div>
          </div>
          <ListFilter className="text-[#8A6E5D]" size={20} />
        </div>

        {/* STUDENT GRID */}
        {filteredStudents.length > 0 ? (
          <section className="max-w-[1400px] mx-auto mb-10">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
              {filteredStudents.map((student, index) => (
                <Studentcard key={index} {...student} />
              ))}
            </div>
          </section>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-3xl font-bold text-[#8A6E5D]">
              No results found{" "}
              {searchQuery
                ? `for "${searchQuery}"`
                : `under the letter "${activeLetter}"`}
            </h2>
            <p className="text-[#9E8576] mt-2">
              Please try searching with a different name or letter.
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
