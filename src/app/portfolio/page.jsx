"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import ProjectCard from "@/layout/projects";
import { Projects } from "@/const";

const Portfolio = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = Projects.filter(proj =>
        proj.titleProj.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (proj.developers && proj.developers.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <div className="min-h-screen w-full bg-[#FFF8DE]/44 overflow-x-hidden flex flex-col">
            
            <Navbar />

=            <div className="w-full px-5 pt-10 pb-5">
                <div className="max-w-[1400px] mx-auto bg-[url('/assets/496117.png')] bg-cover bg-center rounded-[40px] overflow-hidden shadow-lg relative h-[400px]">
                    
                    <div className="absolute inset-0 bg-white/20 backdrop-blur-sm flex flex-col items-center justify-center text-center px-5">
                        
                        <h1 className="text-6xl md:text-8xl font-serif font-extrabold text-[#FFF8DE] mb-2 drop-shadow-sm text-center">
                            Portfolio
                        </h1>
                        <p className="text-[#FFFFFF] text-lg md:text-xl font-medium italic drop-shadow-sm max-w-2xl mb-8 text-center leading-relaxed">
                            A collection of our projects, showcasing the skills, creativity, and <br className="hidden md:block"/> teamwork behind every output.
                        </p>

                        <div className="relative w-full max-w-md group">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Search className="text-[#8A6E5D] group-focus-within:text-[#7FBF83] transition-colors" size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search by project or developer..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)} 
                                className="w-full bg-white/40 backdrop-blur-md border border-white/50 text-[#8A6E5D] font-bold placeholder:text-[#8A6E5D]/60 rounded-full py-4 pl-12 pr-6 shadow-md focus:outline-none focus:ring-2 focus:ring-[#7FBF83] transition-all duration-300"
                            />
                        </div>

                    </div>
                </div>
            </div>

            {/* PROJECTS SECTION */}
            <section className="w-full flex flex-col items-center py-20 lg:px-20 px-5 flex-grow">
                <h1 className="text-[#8A6E5D] text-5xl md:text-6xl font-bold text-center mb-24">
                    Featured Projects
                </h1>

                <div className="flex flex-col gap-24 w-full max-w-7xl">
                    {filteredProjects.length > 0 ? (
                        filteredProjects.map((proj, index) => (
                            <ProjectCard
                                key={index}
                                index={index}
                                img={proj.picProj}
                                title={proj.titleProj}
                                desc={proj.descProj}
                                tools={proj.tools}
                                devs={proj.developers}
                            />
                        ))
                    ) : (
                        <div className="text-center py-20">
                            <h2 className="text-2xl font-bold text-[#8A6E5D]">No projects found for "{searchQuery}"</h2>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
            
        </div>
    );
};

export default Portfolio;