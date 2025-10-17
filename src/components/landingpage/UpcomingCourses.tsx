"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const courses = [
  {
    title: "HSC 2026 রসায়ন স্পেশাল ব্যাচ",
    start: "শুরু: নভেম্বর ১৫, ২০২5",
    duration: "সময়কাল: ৪ মাস",
    desc: "অধ্যাপক সাফওয়ান স্যারের তত্ত্বাবধানে পূর্ণাঙ্গ প্রস্তুতি কোর্স।",
    img: "/course1.jpg",
  },
  {
    title: "Admission Crash Program 2025",
    start: "শুরু: ডিসেম্বর ৫, ২০২৫",
    duration: "সময়কাল: ২ মাস",
    desc: "বিশ্ববিদ্যালয় ভর্তি পরীক্ষার জন্য টার্গেটভিত্তিক রিভিশন ও মডেল টেস্ট।",
    img: "/course1.jpg",
  },
  {
    title: "SSC Chemistry Foundation Batch",
    start: "শুরু: জানুয়ারি ১০, ২০২৬",
    duration: "সময়কাল: ৩ মাস",
    desc: "SSC শিক্ষার্থীদের জন্য মূলভিত্তি গঠনের কোর্স।",
    img: "/images/course3.jpg",
  },
];

export default function UpcomingCourses() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-neutral-900 dark:to-neutral-800 ">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
          আসন্ন কোর্সসমূহ
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10">
          আমাদের নতুন ব্যাচে ভর্তি চলছে! নিচে আসন্ন কোর্সগুলোর বিস্তারিত দেখুন।
        </p>

        <Carousel opts={{ align: "start", loop: true }}>
          <CarouselContent>
            {courses.map((course, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white dark:bg-zinc-900 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-zinc-700"
                >
                  <div className="relative w-full h-48">
                    <Image
                      src={course.img}
                      alt={course.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 text-left">
                    <h3 className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                      {course.title}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">
                      📅 {course.start}
                    </p>
                    <p className="text-sm text-gray-500 mb-2">
                      ⏳ {course.duration}
                    </p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                      {course.desc}
                    </p>
                    <Button className="w-full bg-emerald-600 hover:bg-emerald-700 text-white">
                      এখনই ভর্তি হন
                    </Button>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {/* <CarouselPrevious />
          <CarouselNext /> */}
        </Carousel>
      </div>
    </section>
  );
}
