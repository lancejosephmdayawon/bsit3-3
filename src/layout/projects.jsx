import { Users, ExternalLink } from "lucide-react";

const ProjectCard = ({ img, title, desc, tools, devs, index }) => {
    return (
        <div
            className={`flex justify-center items-center lg:gap-20 gap-10 flex-wrap ${
                index % 2 !== 0 ? "flex-row-reverse" : ""
            } w-full`}
        >
            <div className="lg:w-3/5 w-full flex justify-center">
                <div className="w-full aspect-video relative group overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:shadow-2xl">
                    <img
                        src={`/assets/projects/${img}`}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                         <div className="bg-white/90 p-4 rounded-full shadow-lg">
                            <ExternalLink size={32} className="text-[#7FBF83]" />
                         </div>
                    </div>
                </div>
            </div>

            {/* CONTENT SECTION */}
            <div className="lg:w-1/3 w-full flex flex-col gap-6">
                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <h2 className="text-[#8A6E5D] text-4xl font-bold tracking-tight">
                            {title}
                        </h2>

                        <a href="#" className="text-[#7FBF83] hover:text-[#8A6E5D] transition-colors">
                            <ExternalLink size={24} strokeWidth={2.5} />
                        </a>
                    </div>
                    <div className="h-1 w-20 bg-[#7FBF83] rounded-full"></div>
                </div>

                <p className="text-[#9E8576] text-lg leading-relaxed">
                    {desc}
                </p>

                <div className="flex flex-col gap-3 bg-white/30 p-5 rounded-2xl border border-white/50 shadow-sm">
                    <div className="flex items-center gap-2 text-[#7FBF83] font-bold uppercase text-xs tracking-widest">
                        <Users size={16} />
                        <span>Development Team</span>
                    </div>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[#8A6E5D] font-semibold italic text-[13px]">

                        {devs ? devs.split(',').map((name, i) => (
                            <span key={i} className="truncate">• {name.trim()}</span>
                        )) : (
                            <>
                                <span>• Name 1</span>
                                <span>• Name 2</span>
                                <span>• Name 3</span>
                                <span>• Name 4</span>
                                <span>• Name 5</span>
                                <span>• Name 6</span>
                            </>
                        )}
                    </div>
                </div>

                <div className="flex flex-row gap-2.5 flex-wrap mt-2">
                    {tools.map((tool, i) => (
                        <span
                            key={i}
                            className="bg-[#B5A996] text-[#FFF8DE] text-[10px] uppercase tracking-wider font-extrabold py-1.5 px-4 rounded-full shadow-sm"
                        >
                            {tool}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;