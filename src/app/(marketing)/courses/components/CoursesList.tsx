"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";


const allCourses = [
  // 🟢 SSC Courses
  {
    id: 1,
    category: "ssc",
    title: "এসএসসি কেমিস্ট্রি রেগুলার কোর্স",
    description: "SSC সিলেবাস সম্পূর্ণ কভার সহ অনুশীলন ক্লাস ও টেস্ট।",
    duration: "১ বছর",
    fee: "৳ ৮,০০০",
    image: "/ssc1.jpg",
    day: "Saturday & Sunday",
    time: "4:00 PM - 6:00 PM",
  },
  {
    id: 2,
    category: "ssc",
    title: "এসএসসি ক্র্যাশ কোর্স",
    description: "দ্রুত পুনরাবৃত্তি ও গুরুত্বপূর্ণ প্রশ্ন অনুশীলন।",
    duration: "৩ মাস",
    fee: "৳ ৪,০০০",
    image: "/ssc2.jpg",
    day: "Friday & Saturday",
    time: "5:00 PM - 7:00 PM",
  },

  // 🟣 HSC Courses
  {
    id: 3,
    category: "hsc-11",
    title: "একাদশ শ্রেণি রেগুলার কোর্স",
    description: "এইচএসসি একাদশ শ্রেণির পূর্ণ কেমিস্ট্রি সিলেবাস কভার।",
    duration: "১ বছর",
    fee: "৳ ১২,০০০",
    image: "/hsc11.jpg",
    day: "Saturday & Sunday",
    time: "4:00 PM - 6:00 PM",
  },
  {
    id: 4,
    category: "hsc-12",
    title: "দ্বাদশ শ্রেণি রেগুলার কোর্স",
    description: "দ্বাদশ শ্রেণির সম্পূর্ণ সিলেবাস ও মডেল টেস্ট।",
    duration: "১ বছর",
    fee: "৳ ১২,০০০",
    image: "/hsc12.jpg",
    day: "Saturday & Sunday",
    time: "6:30 PM - 8:30 PM",
  },

  // 🟠 Crash Courses
  {
    id: 5,
    category: "crash",
    title: "এইচএসসি ক্র্যাশ কোর্স",
    description: "কম সময়ে গুরুত্বপূর্ণ বিষয়গুলোর পুনরাবৃত্তি।",
    duration: "৩ মাস",
    fee: "৳ ৫,০০০",
    image: "/hsccrash.jpg",
    day: "Friday & Saturday",
    time: "5:00 PM - 7:00 PM",
  },
  {
    id: 6,
    category: "crash",
    title: "এসএসসি ক্র্যাশ কোর্স",
    description: "পরীক্ষার আগে দ্রুত প্রস্তুতির জন্য বিশেষ ক্লাস।",
    duration: "২ মাস",
    fee: "৳ ৪,০০০",
    image: "/ssccrash.jpg",
    day: "Friday & Saturday",
    time: "4:00 PM - 6:00 PM",
  },

  // 🔵 Admission Courses
  {
    id: 7,
    category: "medical",
    title: "মেডিকেল ভর্তি কোর্স",
    description: "MBBS ভর্তি পরীক্ষার জন্য বিশেষভাবে তৈরি কোর্স।",
    duration: "৪ মাস",
    fee: "৳ ৮,০০০",
    image: "/medical.jpg",
    day: "Friday & Saturday",
    time: "5:00 PM - 7:00 PM",
  },
  {
    id: 8,
    category: "varsity",
    title: "ভার্সিটি ভর্তি কোর্স",
    description:
      "ঢাবি, রুয়েট, জাহাঙ্গীরনগরসহ বিভিন্ন ভার্সিটি ভর্তি প্রস্তুতি।",
    duration: "৪ মাস",
    fee: "৳ ৭,০০০",
    image: "/varsity.jpg",
    day: "Friday & Saturday",
    time: "4:00 PM - 6:00 PM",
  },
  {
    id: 9,
    category: "engineering",
    title: "ইঞ্জিনিয়ারিং ভর্তি কোর্স",
    description: "BUET, RUET, KUET ভর্তি পরীক্ষার জন্য প্রস্তুতি ক্লাস।",
    duration: "৪ মাস",
    fee: "৳ ৮,০০০",
    image: "/engineering.jpg",
    day: "Friday & Saturday",
    time: "6:30 PM - 8:30 PM",
  },
];

export default function CoursesList({
  selectedCategory,
}: {
  selectedCategory: string;
}) {
  const filteredCourses =
    selectedCategory === "all"
      ? allCourses
      : allCourses.filter((c) => c.category === selectedCategory);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-4">
      {filteredCourses.length > 0 ? (
        filteredCourses.map((course) => (
          <div
            key={course.id}
            className=" rounded-xl border-3 shadow-sm hover:shadow-lg transition p-4"
          >
            <Image
              src={course.image}
              alt={course.title}
              width={400}
              height={250}
              className="rounded-lg w-full h-48 object-cover"
            />
            <h3 className="text-lg font-semibold mt-3">{course.title}</h3>
            <p className="text-sm  mt-1">{course.description}</p>
            <div className="mt-3 text-sm ">সময়কাল: {course.duration}</div>
            <div className="text-sm ">দিন: {course.day}</div>
            <div className="text-sm ">সময়: {course.time}</div>
            <div className="font-semibold text-indigo-600">{course.fee}</div>
            <Button className="w-full mt-3">বিস্তারিত দেখুন</Button>
          </div>
        ))
      ) : (
        <p className="text-center col-span-full">
          এই ক্যাটাগরিতে কোন কোর্স পাওয়া যায়নি।
        </p>
      )}
    </div>
  );
}
