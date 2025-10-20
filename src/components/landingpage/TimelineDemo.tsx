"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import { motion, useInView } from "framer-motion";
import { FaGraduationCap, FaUniversity, FaMedal, FaBook } from "react-icons/fa";

export function SuccessTimeline() {
  const [counts, setCounts] = useState<Record<string, number>>({});
 
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // ✅ Data useMemo দিয়ে wrap করা হলো যাতে eslint warning না আসে
  const data = useMemo(
    () => [
      {
        year: "2024",
        achievements: [
          { label: "SSC A+", value: 500, icon: <FaMedal /> },
          { label: "HSC A+", value: 1500, icon: <FaMedal /> },
          { label: "Varsity DU", value: 20, icon: <FaUniversity /> },
          { label: "Varsity JU", value: 15, icon: <FaUniversity /> },
          { label: "Varsity RU", value: 30, icon: <FaUniversity /> },
          { label: "CU", value: 10, icon: <FaUniversity /> },
        ],
      },
      {
        year: "2023",
        achievements: [
          { label: "Medical", value: 40, icon: <FaGraduationCap /> },
          { label: "GST", value: 500, icon: <FaBook /> },
          { label: "Engineering", value: 50, icon: <FaGraduationCap /> },
          { label: "Others", value: 100, icon: <FaBook /> },
        ],
      },
      {
        year: "2022",
        achievements: [
          { label: "SSC A+", value: 550, icon: <FaMedal /> },
          { label: "HSC A+", value: 1600, icon: <FaMedal /> },
          { label: "Varsity DU", value: 25, icon: <FaUniversity /> },
          { label: "Medical", value: 45, icon: <FaGraduationCap /> },
        ],
      },
    ],
    []
  );

  // ✅ Smooth counter animation (only starts when visible)
  useEffect(() => {
    if (!inView) return;
    const interval = setInterval(() => {
      setCounts((prev) => {
        const updated: Record<string, number> = {};
        data.forEach((d) => {
          d.achievements.forEach((a) => {
            const key = `${d.year}-${a.label}`;
            const current = prev[key] || 0;
            if (current < a.value) {
              updated[key] = Math.min(
                current + Math.ceil(a.value / 30),
                a.value
              );
            } else {
              updated[key] = a.value;
            }
          });
        });
        return { ...prev, ...updated };
      });
    }, 40);
    return () => clearInterval(interval);
  }, [data, inView]);

  const timelineData = data.map((d, i) => ({
    title: d.year,
    content: (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: i * 0.3 }}
        className="flex flex-wrap gap-4 mt-4 justify-center"
      >
        {d.achievements.map((a) => {
          const key = `${d.year}-${a.label}`;
          return (
            <motion.div
              key={key}
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 p-3 bg-white dark:bg-zinc-900 rounded-xl shadow-sm transition-all"
            >
              <span className="text-2xl text-emerald-500">{a.icon}</span>
              <div>
                <p className="text-lg font-semibold text-black dark:text-white">
                  {counts[key] || 0}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {a.label}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    ),
  }));

  return (
    <div
      ref={ref}
      className="max-w-7xl mx-auto bg-white dark:bg-neutral-950 font-sans md:px-10 mt-10 flex flex-col items-center text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">
        আমাদের সাফল্য
      </h2>

      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-2xl mb-8">
        আমরা গত তিন বছরে আমাদের শিক্ষার্থীদের অসাধারণ সাফল্য অর্জনে সাহায্য
        করেছি। নিচে কিছু উল্লেখযোগ্য অর্জন দেখানো হলো:
      </p>

      <div className="w-full">
        <Timeline data={timelineData} />
      </div>
    </div>
  );
}
