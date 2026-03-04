export default function Announcement({ title, message, date }) {
  return (
    <div className="bg-white/40 backdrop-blur-md p-6 rounded-[20px] border border-white/50 hover:bg-white/50 transition-all shadow-sm">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-xl font-bold text-[#8A6E5D]">{title}</h3>
        <span className="text-xs font-medium text-[#B5A996] bg-white/60 px-3 py-1 rounded-full">
          {date}
        </span>
      </div>
      <p className="text-[#9E8576] leading-relaxed">
        {message}
      </p>
    </div>
  );
}