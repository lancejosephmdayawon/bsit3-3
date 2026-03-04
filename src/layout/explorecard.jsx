"use client";

import { useState } from "react";

const Explorecard = ({ title, description, icon }) => {
    const [isHovered, setIsHovered] = useState(false);

    const confettiLeaves = Array.from({ length: 12 });

    return (
        <div 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-white/40 backdrop-blur-md w-63 min-h-55 rounded-3xl flex flex-col justify-start items-center gap-3 text-center p-6 border border-white/20 shadow-xl transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white/50 relative overflow-hidden cursor-pointer"
        >
            <style>{`
                @keyframes confettiBlow {
                    0% { transform: translate(0, 0) scale(0) rotate(0deg); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translate(var(--tw-x), var(--tw-y)) scale(1) rotate(var(--tw-rotate)); opacity: 0; }
                }
                .leaf-particle {
                    position: absolute;
                    background: #A7C796;
                    border-radius: 50% 0 50% 0;
                    width: 10px;
                    height: 10px;
                    pointer-events: none;
                    z-index: 5;
                }
            `}</style>

            {isHovered && confettiLeaves.map((_, i) => (
                <div
                    key={i}
                    className="leaf-particle"
                    style={{
                        top: '50%',
                        left: '50%',
                        "--tw-x": `${(Math.random() - 0.5) * 250}px`,
                        "--tw-y": `${(Math.random() - 0.5) * 250}px`,
                        "--tw-rotate": `${Math.random() * 360}deg`,
                        animation: `confettiBlow 1.2s ease-out forwards`
                    }}
                />
            ))}
            
            <div className="w-20 h-20 bg-white/60 rounded-2xl flex justify-center items-center text-[#8A6E5D] z-10 shadow-inner mb-2">
                {icon}
            </div>

            <h3 className="text-[#8A6E5D] text-2xl font-bold z-10 tracking-tight">{title}</h3>

            {/* DESCRIPTION */}
            <p className="text-[#9E8576] text-sm font-medium leading-relaxed z-10">
                {description}
            </p>
        </div>
    );
};

export default Explorecard;