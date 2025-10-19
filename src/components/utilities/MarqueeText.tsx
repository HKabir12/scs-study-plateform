"use client";

import { useEffect, useState } from "react";

export default function MarqueeText() {
  const [text, setText] = useState("লোড হচ্ছে...");

  useEffect(() => {
    async function fetchMarquee() {
      try {
        // Active marquee fetch
        const res = await fetch("/api/marquee?active=true");
        const data = await res.json();

        // Backend থেকে একটিমাত্র object আসবে
        if (data?.text) setText(data.text);
      } catch (err) {
        console.error("Failed to fetch marquee:", err);
      }
    }
    fetchMarquee();
  }, []);

  return (
    <div className="w-full overflow-hidden bg-emerald-600 text-white py-2">
      <div className="animate-marquee whitespace-nowrap text-sm md:text-base font-medium">
        {text}
      </div>
    </div>
  );
}
