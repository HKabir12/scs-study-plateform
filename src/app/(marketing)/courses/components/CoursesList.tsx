"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const courses = [
  {
    id: 1,
    title: "এইচএসসি রেগুলার কোর্স (একাদশ-দ্বাদশ)",
    description:
      "পুরো এনসিটিবি সিলেবাস কভারসহ সমস্যা সমাধান ও মডেল টেস্টসহ পূর্ণাঙ্গ কেমিস্ট্রি কোর্স।",
    image: "/hsc.jpg",
    duration: "১ বছর",
    fee: "৳ ১২,০০০",
  },
  {
    id: 2,
    title: "এইচএসসি ক্র্যাশ কোর্স",
    description:
      "অল্প সময়ে পুনরাবৃত্তি ও গুরুত্বপূর্ণ প্রশ্ন অনুশীলনের জন্য বিশেষ কোর্স।",
    image: "/hsccrash.jpg",
    duration: "৩ মাস",
    fee: "৳ ৫,০০০",
  },
  {
    id: 3,
    title: "অ্যাডমিশন প্রস্তুতি কোর্স",
    description:
      "মেডিকেল, ভার্সিটি ও ইঞ্জিনিয়ারিং ভর্তি পরীক্ষার জন্য বিশেষ কোর্স।",
    image: "/admission.jpeg",
    duration: "৪ মাস",
    fee: "৳ ৮,০০০",
  },
];

export default function CoursesList() {
  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {courses.map((course) => (
        <div
          key={course.id}
          className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-gray-100"
        >
          <div className="relative h-56 w-full">
            <Image
              src={course.image}
              alt={course.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h2 className="text-xl font-semibold ">
              {course.title}
            </h2>
            <p className="mt-2  text-sm">{course.description}</p>
            <div className="mt-4 flex items-center justify-between text-sm ">
              <span>সময়কাল: {course.duration}</span>
              <span>ফি: {course.fee}</span>
            </div>
            <div className="mt-6">
              <Link href={`/courses/${course.id}`}>
                <Button className="w-full">বিস্তারিত দেখুন</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
