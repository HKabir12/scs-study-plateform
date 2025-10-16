"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const mentors = [
  {
    name: "মোঃ মাহবুব আলম",
    role: "ম্যানেজার ও প্রধান মেন্টর",
    education: "এম.এসসি (রসায়ন), ঢাকা বিশ্ববিদ্যালয়",
    experience: "অভিজ্ঞতা: ৫+ বছর",
    phone: "📞 ০১৭১২-১২৩৪৫৬",
    img: "/mahbubvai.jpg",
  },
  {
    name: "আর্মান হোসেন",
    role: "প্রশ্ন প্রণয়নকারী ও মূল্যায়ন কর্মকর্তা",
    education: "এমবিএ, রাজশাহী বিশ্ববিদ্যালয়",
    experience: "অভিজ্ঞতা: ৪+ বছর",
    phone: "📞 ০১৭১৩-৯৮৭৬৫৪",
    img: "/armanvai.jpg",
  },
  {
    name: "তারিকুল ইসলাম",
    role: "উপস্থিতি কর্মকর্তা",
    education: "বিবিএ, সরকারি এডওয়ার্ড কলেজ, পাবনা",
    experience: "অভিজ্ঞতা: ৩+ বছর",
    phone: "📞 ০১৭১৪-৫৫৫৮৮৮",
    img: "/images/mentor3.jpg",
  },
  {
    name: "শামিমা আক্তার",
    role: "পরীক্ষা নিয়ন্ত্রক",
    education: "এম.এসসি (পদার্থবিজ্ঞান), রাজশাহী বিশ্ববিদ্যালয়",
    experience: "অভিজ্ঞতা: ৬+ বছর",
    phone: "📞 ০১৭১৫-৭৭৭৯৯৯",
    img: "/images/mentor4.jpg",
  },
  {
    name: "তানভির হাসান",
    role: "মনিটরিং অফিসার",
    education: "বিএসসি (শিক্ষা), জাতীয় বিশ্ববিদ্যালয়",
    experience: "অভিজ্ঞতা: ৪+ বছর",
    phone: "📞 ০১৭১৬-৩৩৩২২২",
    img: "/images/mentor5.jpg",
  },
  {
    name: "রফিক আহমেদ",
    role: "সহযোগী ও যোগাযোগ কর্মকর্তা",
    education: "বি.এ (ইংরেজি), পাবনা বিশ্ববিদ্যালয়",
    experience: "অভিজ্ঞতা: ২+ বছর",
    phone: "📞 ০১৭১৭-১১২২৩৩",
    img: "/images/mentor6.jpg",
  },
];

export default function MentorSection() {
  return (
    <section className="py-20  to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white">
          আমাদের অভিজ্ঞ মেন্টরবৃন্দ
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          আমাদের দক্ষ ও অভিজ্ঞ মেন্টর টিম শিক্ষার্থীদের সফলতা অর্জনে নিবেদিতভাবে
          কাজ করে যাচ্ছে। তাদের তত্ত্বাবধানে নিয়মিত গাইডলাইন, পরীক্ষা এবং
          মূল্যায়ন পরিচালিত হয়।
        </p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                type: "spring",
                stiffness: 70,
              }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative w-32 h-32 mx-auto mb-4">
                <Image
                  src={mentor.img}
                  alt={mentor.name}
                  fill
                  className="rounded-full object-cover border-4 border-indigo-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                {mentor.name}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                {mentor.role}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                🎓 {mentor.education}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-1">
                💼 {mentor.experience}
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-sm">
                {mentor.phone}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
