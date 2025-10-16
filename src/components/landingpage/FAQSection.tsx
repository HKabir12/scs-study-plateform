"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Safwan’s Chemistry Solution কী?",
    answer:
      "Safwan’s Chemistry Solution হলো পাবনার অন্যতম সেরা রসায়ন শিক্ষা প্রতিষ্ঠান, যেখানে এইচএসসি ও ভর্তি পরীক্ষার জন্য বিশেষায়িত কোচিং করানো হয়।",
  },
  {
    question: "ক্লাসগুলো কোথায় অনুষ্ঠিত হয়?",
    answer:
      "আমাদের প্রধান অফিস পাবনা সরকারি এডওয়ার্ড কলেজ সংলগ্ন, রাধানগর এলাকায় অবস্থিত। এখানে অফলাইন ক্লাসের পাশাপাশি অনলাইন ব্যাচও চালু আছে।",
  },
  {
    question: "ভর্তি কিভাবে করব?",
    answer:
      "তুমি আমাদের ওয়েবসাইটের Admission বা Contact পেজে গিয়ে ফর্ম পূরণ করে ভর্তি হতে পারো। এছাড়া সরাসরি অফিসে এসে ভর্তি নেওয়া যায়।",
  },
  {
    question: "ক্লাসের সময়সূচি কেমন?",
    answer:
      "প্রতিটি ব্যাচের জন্য আলাদা সময়সূচি থাকে। তোমার প্রয়োজন অনুযায়ী সকাল, বিকেল বা সাপ্তাহিক ব্যাচ বেছে নিতে পারবে।",
  },
  {
    question: "রেকর্ডেড ক্লাস পাওয়া যাবে কি?",
    answer:
      "হ্যাঁ, যারা অনলাইন ব্যাচে যুক্ত থাকে তারা ক্লাস রেকর্ড ভিডিও ও PDF নোটস পাবে।",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-6 ">
      <div className="max-w-4xl mx-auto px-4 md:px-8">
        <h2 className="text-center text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 ">
          সাধারণ প্রশ্নোত্তর (FAQ)
        </h2>
        <h2 className="text-center text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-12">
          <span className="text-3xl md:text-4xl font-extrabold text-emerald-500 pb-2">
            ❓
          </span>{" "}
          তোমার যদি আরও প্রশ্ন থেকে থাকে, তাহলে নির্দ্বিধায় আমাদের সাথে যোগাযোগ
          করো!
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-5 py-4 text-left bg-white dark:bg-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-700 transition-all duration-200"
              >
                <span className="font-medium text-gray-900 dark:text-white text-sm md:text-base">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="text-gray-600 dark:text-gray-300" />
                </motion.div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-4 text-gray-700 dark:text-gray-300 text-sm md:text-base bg-gray-50 dark:bg-zinc-900"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
