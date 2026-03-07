"use client";

import { useEffect, useState } from "react";
import { BookOpen } from "lucide-react";
import Announcement from "@/layout/announcement";

export default function AnnouncementSection() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/announcements")
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch announcements");
        return res.json();
      })
      .then(data => {
        if (!Array.isArray(data)) {
          setError("Invalid data format from server");
          setAnnouncements([]);
        } else {
          setAnnouncements(data);
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Unable to load announcements at this time");
        setLoading(false);
      });
  }, []);

  return (
    <section className="max-w-[1400px] mx-auto w-full px-4 md:px-5 pb-20">
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-[#B5A996] p-2 rounded-lg text-white shadow-sm shrink-0">
          <BookOpen size={24} />
        </div>
        <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#8A6E5D]">
          To-Do-List
        </h2>
      </div>

      <div className="flex flex-col gap-4 md:gap-6">
        {loading ? (
          <p className="text-[#8A6E5D] font-semibold">Loading to-do items...</p>
        ) : error ? (
          <p className="text-red-600 font-semibold italic">{error}</p>
        ) : announcements.length === 0 ? (
          <p className="text-[#8A6E5D] font-semibold italic">No to-do items yet.</p>
        ) : (
          announcements.map((item, index) => (
            <Announcement
              key={index}
              title={item.title}
              message={item.message}
              date={item.date}
            />
          ))
        )}
      </div>
    </section>
  );
}