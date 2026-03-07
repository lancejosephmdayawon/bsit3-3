// app/loading.jsx
"use client";

import Image from "next/image";

export default function Loading() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-[#FFF8DE]/44">
      {/* Logo spinning */}
      <Image
        src="/assets/studiot3ch_logo.png"
        alt="StudioT3ch Logo"
        width={120}
        height={120}
        className="animate-spin-slow"
      />
      <p className="mt-6 text-[#2c2420] text-2xl font-bold animate-pulse">
        Loading content...
      </p>

      <style jsx>{`
        @keyframes spin-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }
      `}</style>
    </div>
  );
}