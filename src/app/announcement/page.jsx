"use client";

import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import Announcement from "@/layout/announcement"; 
import { Clock, User, BookOpen } from "lucide-react";

const scheduleData = [
    { code: "COMP 019", desc: "Applications Development and Emerging Technologies", schedule: "T/T 03:00PM-09:00PM", faculty: "ESPARRAGO, YUZEF EZECKIEL" },
    { code: "COMP 035", desc: "Data Mining", schedule: "M/TH 04:30PM-07:30PM", faculty: "TBA" },
    { code: "GEED 003", desc: "The Contemporary World/Ang Kasalukuyang Daigdig", schedule: "T 10:30AM-01:30PM", faculty: "DALUPANG, JOHN PAOLO" },
    { code: "GEED 008", desc: "Ethics/Etika", schedule: "M 01:30PM-04:30PM", faculty: "BOLAÑOS, KRISTOFFER" },
    { code: "HRMA 001", desc: "Principles of Organization and Management", schedule: "F 10:30AM-01:30PM", faculty: "BRAGAS, LEOPOLDO FRANCISCO" },
    { code: "INTE 302", desc: "Information Assurance and Security 1", schedule: "M/TH 10:30AM-01:30PM", faculty: "MANDIGMA, JONNIFER" },
    { code: "INTE 303", desc: "Capstone Project 1", schedule: "F/F 04:00PM-09:00PM", faculty: "ESCUETA, NINO DANIELLE" },
];

export default function Announce() {
    return (
        <div className="min-h-screen w-full bg-[#FFF8DE]/44 flex flex-col overflow-x-hidden">
            <Navbar />

            <div className="w-full px-5 pt-10 pb-5">
                <div className="max-w-[1400px] mx-auto bg-[url('/assets/42637.jpg')] bg-cover bg-center rounded-[40px] overflow-hidden shadow-lg relative h-[300px]">
                    <div className="absolute inset-0 bg-white/10 backdrop-blur-sm flex flex-col items-center justify-center text-center px-5">
                        <h1 className="text-5xl md:text-7xl font-serif font-extrabold text-[#FFF8DE] drop-shadow-sm">
                            Announcements
                        </h1>
                        <p className="text-white text-lg font-medium italic mt-2 drop-shadow-md">
                            Official class schedule and latest news updates.
                        </p>
                    </div>
                </div>
            </div>

            {/* SCHEDULE BOARD SECTION */}
            <section className="max-w-[1400px] mx-auto w-full px-5 py-10">
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-[#B5A996] p-2 rounded-lg text-white">
                        <Clock size={24} />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-[#8A6E5D]">Class Schedule Board</h2>
                </div>

                <div className="bg-white/30 backdrop-blur-md border border-white/50 rounded-[30px] overflow-hidden shadow-xl">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-[#B5A996]/20 text-[#8A6E5D] uppercase text-xs tracking-widest">
                                    <th className="p-5 font-bold">Subject</th>
                                    <th className="p-5 font-bold">Description</th>
                                    <th className="p-5 font-bold">Schedule</th>
                                    <th className="p-5 font-bold">Faculty</th>
                                </tr>
                            </thead>
                            <tbody className="text-[#9E8576] font-medium text-sm">
                                {scheduleData.map((item, index) => (
                                    <tr key={index} className="border-t border-white/40 hover:bg-white/20 transition-colors">
                                        <td className="p-5 font-bold text-[#7FBF83]">{item.code}</td>
                                        <td className="p-5">{item.desc}</td>
                                        <td className="p-5 flex items-center gap-2 whitespace-nowrap">
                                            <Clock size={14} className="text-[#B5A996]" />
                                            {item.schedule}
                                        </td>
                                        <td className="p-5 italic text-[11px]">
                                            <div className="flex items-center gap-2">
                                                <User size={12} className="text-[#B5A996]" />
                                                {item.faculty}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* STATIC ANNOUNCEMENTS SECTION */}
            <section className="max-w-[1400px] mx-auto w-full px-5 pb-20">
                <div className="flex items-center gap-3 mb-8">
                    <div className="bg-[#B5A996] p-2 rounded-lg text-white">
                        <BookOpen size={24} />
                    </div>
                    <h2 className="text-3xl font-serif font-bold text-[#8A6E5D]">Latest Updates</h2>
                </div>
                <div className="flex flex-col gap-6">
                    <Announcement 
                        title="Final Capstone Defense"
                        message="Please ensure all group repositories are updated for initial review this week."
                        date="March 6, 2026"
                    />
                    <Announcement 
                        title="Room Change: Data Mining"
                        message="Thursday's session will be held in IT Lab 3 for a hands-on activity."
                        date="March 5, 2026"
                    />
                </div>
            </section>

            <Footer />
        </div>
    );
}