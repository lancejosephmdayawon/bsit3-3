import { Instagram, Github } from "lucide-react";

const Officerscard = ({ image, name, role, quote, fullName, nickname, hobby, color, ig, github }) => {
    return (
        /* Outer Container */
        <div className="group relative h-[420px] w-full [perspective:1000px] cursor-pointer">
            
            <div className="relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                
                {/* --- FRONT OF CARD --- */}
                <div className="absolute inset-0 [backface-visibility:hidden] bg-white/20 backdrop-blur-lg border border-white/30 rounded-[30px] shadow-[0_8px_32px_0_rgba(138,110,93,0.15)] flex flex-col items-center p-5 text-center">
                    
                    <div className="w-full aspect-square rounded-2xl overflow-hidden mb-3 shadow-inner border-2 border-white/40">
                        <img src={image} alt={name} className="w-full h-full object-cover object-top" />
                    </div>
                    
                    <h3 className="text-[#8A6E5D] text-lg font-extrabold uppercase tracking-wide">
                        {name}
                    </h3>
                    <p className="text-[#7FBF83] text-[10px] font-bold uppercase tracking-widest mt-1 mb-2">
                        {role}
                    </p>
                    <p className="text-[#9E8576] italic text-xs font-medium line-clamp-2 px-1">
                        "{quote}"
                    </p>
                </div>

                {/* --- BACK OF CARD (Flipped) --- */}
                <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-white/40 to-white/10 backdrop-blur-xl border border-white/40 rounded-[30px] shadow-[0_8px_32px_0_rgba(138,110,93,0.2)] flex flex-col items-center p-6 text-center">
                    
                    <img src={image} alt={name} className="w-36 h-36 rounded-full object-cover object-top shadow-md border-4 border-white/50 mb-4" />
                    
                    <h4 className="text-[#8A6E5D] text-2xl font-bold border-b border-[#8A6E5D]/20 pb-2 mb-4 w-full">
                        {fullName}
                    </h4>
                    
                    <div className="flex flex-col gap-3 text-base text-[#9E8576] font-medium w-full text-left px-2">
                        <p><strong className="text-[#8A6E5D]">Nickname:</strong> {nickname}</p>
                        <p><strong className="text-[#8A6E5D]">Hobby:</strong> {hobby}</p>
                        <p><strong className="text-[#8A6E5D]">Fav Color:</strong> {color}</p>
                    </div>

                    <div className="mt-auto flex gap-5">
                        <a href={`https://instagram.com/${ig}`} target="_blank" rel="noreferrer" className="bg-[#FFF8DE]/80 p-3 rounded-full text-[#A7C796] hover:text-white hover:bg-[#7FBF83] transition-colors shadow-sm">
                            <Instagram size={20} />
                        </a>
                        <a href={`https://github.com/${github}`} target="_blank" rel="noreferrer" className="bg-[#FFF8DE]/80 p-3 rounded-full text-[#A7C796] hover:text-white hover:bg-[#8A6E5D] transition-colors shadow-sm">
                            <Github size={20} />
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Officerscard;