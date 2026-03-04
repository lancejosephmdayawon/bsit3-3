"use client"; 

import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Officerscard from "@/layout/officerscard"; 
import Studentcard from "@/layout/studentcard";   

//  STATIC DATA: CLASS OFFICERS
const officersData = [
    {
        id: "off-1",
        name: "Lance Joseph Dayawon",
        fullName: "Lance Joseph Dayawon",
        nickname: "Lance",
        role: "President",
        quote: "Leading with passion and coding with purpose.",
        image: "/assets/students/lance.png", 
        hobby: "Designing Systems",
        color: "Sage Green",
        ig: "",
        github: "",
    },
    {
        id: "off-2",
        name: "Lance Joseph",
        fullName: "Lance Joseph Dayawon",
        nickname: "Lance",
        role: "Vice President",
        quote: "Share a short line that represents you.",
        image: "/assets/students/lance.png", 
        hobby: "Gaming",
        color: "Brown",
        ig: "",
        github: "",
    },
    {
        id: "off-3",
        name: "Name Here",
        fullName: "Full Name Here",
        nickname: "Nickname",
        role: "Secretary",
        quote: "Quote here...",
        image: "/assets/students/", 
        hobby: "Hobby here",
        color: "Favorite Color",
        ig: "ig_username",
        github: "github_username",
    },
];

// STATIC DATA: STUDENTS 
const studentsData = [
    {
        id: "stu-1",
        name: "Student Name 1",
        fullName: "Student Full Name 1",
        nickname: "Nickname 1",
        quote: "",
        image: "/assets/students/", 
        hobby: "",
        color: "",
        ig: "student_ig",
        github: "student_github",
    },
    {
        id: "stu-2",
        name: "Student Name 2",
        fullName: "Student Full Name 2",
        nickname: "Nickname 2",
        quote: "",
        image: "/assets/students/", 
        hobby: "",
        color: "",
        ig: "",
        github: "",
    },
];

export default function ClassProfiles() {
    const [searchQuery, setSearchQuery] = useState("");

    // FILTER LOGIC
    const filteredOfficers = officersData.filter(officer =>
        officer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        officer.nickname.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const filteredStudents = studentsData.filter(student =>
        student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        student.nickname.toLowerCase().includes(searchQuery.toLowerCase())
    );

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
                            Discover the people behind our block — each with their own story, <br className="hidden md:block"/> dreams, and unique spark.
                        </p>

                        <div className="relative w-full max-w-md group">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Search className="text-[#8A6E5D] group-focus-within:text-[#7FBF83] transition-colors" size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by name or nickname..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} 
                                className="w-full bg-white/40 backdrop-blur-md border border-white/50 text-[#8A6E5D] font-bold placeholder:text-[#8A6E5D]/60 rounded-full py-4 pl-12 pr-6 shadow-md focus:outline-none focus:ring-2 focus:ring-[#7FBF83] transition-all duration-300"
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div className="py-10 px-5 flex-grow">
                
                {filteredOfficers.length > 0 && (
                    <section className="max-w-[1400px] mx-auto mb-20">
                        <div className="flex justify-center mb-10">
                            <h2 className="text-3xl font-extrabold text-white bg-[#B5A996] font-serif px-12 py-3 rounded-full shadow-sm">
                                Class Officers
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                            {filteredOfficers.map((officer) => (
                                <Officerscard key={officer.id} {...officer} />
                            ))}
                        </div>
                    </section>
                )}

                {filteredStudents.length > 0 && (
                    <section className="max-w-[1400px] mx-auto mb-10">
                        <div className="flex justify-center mb-10">
                            <h2 className="text-3xl font-extrabold text-white bg-[#B5A996] font-serif px-12 py-3 rounded-full shadow-sm">
                                Students
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
                            {filteredStudents.map((student) => (
                                <Studentcard key={student.id} {...student} />
                            ))}
                        </div>
                    </section>
                )}

                {filteredOfficers.length === 0 && filteredStudents.length === 0 && (
                    <div className="text-center py-20">
                        <h2 className="text-3xl font-bold text-[#8A6E5D]">
                            No results found for "{searchQuery}" 
                        </h2>
                        <p className="text-[#9E8576] mt-2">
                            Please try searching with a different name or nickname.
                        </p>
                    </div>
                )}
            </div>

            <Footer />
            
        </div>
    );
}