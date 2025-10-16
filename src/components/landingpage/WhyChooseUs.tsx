"use client";

import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaCheckCircle,
  FaUsers,
} from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaChalkboardTeacher className="text-emerald-500 w-8 h-8" />,
    title: "অভিজ্ঞ শিক্ষক",
    description:
      "অর্জিত অভিজ্ঞতা ও দক্ষতা সহ শিক্ষকরা শিক্ষার্থীদের গাইড করেন।",
  },
  {
    icon: <FaBookOpen className="text-emerald-500 w-8 h-8" />,
    title: "পুরো সিলেবাস কভার",
    description:
      "HSC, Admission, ও Crash কোর্সের সমস্ত টপিক সঠিকভাবে কভার করা হয়।",
  },
  {
    icon: <FaCheckCircle className="text-emerald-500 w-8 h-8" />,
    title: "মডেল টেস্ট ও সমস্যা সমাধান",
    description:
      "নিয়মিত মডেল টেস্ট এবং সমস্যা সমাধান ক্লাসের মাধ্যমে প্রস্তুতি।",
  },
  {
    icon: <FaUsers className="text-emerald-500 w-8 h-8" />,
    title: "ছোট ক্লাস সাইজ",
    description: "প্রতিটি শিক্ষার্থীকে ব্যক্তিগত মনোযোগ দেওয়া হয়।",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white dark:bg-neutral-950 py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4 text-black dark:text-white"
        >
          কেন আমাদের বেছে নেবেন?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-neutral-700 dark:text-neutral-300 text-base md:text-lg mb-12 max-w-2xl mx-auto"
        >
          আমাদের শিক্ষার্থীরা সর্বোচ্চ ফলাফল অর্জন করতে সাহায্য করার জন্য আমরা
          কিছু গুরুত্বপূর্ণ সুবিধা প্রদান করি:
        </motion.p>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-zinc-900 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.2, rotate: [0, 10, -10, 0] }}
                transition={{ duration: 0.5 }}
                className="mb-4"
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
