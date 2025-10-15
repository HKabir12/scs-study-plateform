"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";

// --- ICON COMPONENTS (Lucide-style SVGs) ---
const IconBookOpenText = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M2 12s4-8 10-8 10 8 10 8-4 8-10 8-10-8-10-8Z" />
    <path d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z" />
  </svg>
);

const IconUsers = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 5.74" />
  </svg>
);

const IconFileText = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
    <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);

const IconGroup = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <path d="M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 5.74" />
  </svg>
);

const IconListChecks = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="m3 16 2 2 4-4" />
    <path d="m3 12 2 2 4-4" />
    <path d="m3 8 2 2 4-4" />
    <path d="M14 10h6" />
    <path d="M14 14h6" />
    <path d="M14 18h6" />
  </svg>
);

const IconHelpCircle = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 0 1 5.8 1c0 2-3 3-3 3" />
    <path d="M12 17h.01" />
  </svg>
);

const IconMail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const IconBarChart3 = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 3v18h18" />
    <path d="M18 17V9" />
    <path d="M13 17V7" />
    <path d="M8 17v-4" />
  </svg>
);

// --- DATA (বাংলা অনুবাদ) ---
const servicesData = [
  {
    title: "অফলাইন/অনলাইন প্রোগ্রাম",
    icon: IconBookOpenText,
    description: "সুবিধামত অফলাইন বা অনলাইন ক্লাসে অংশ নেওয়ার সুযোগ।",
  },
  {
    title: "মেধাবী ও অভিজ্ঞ শিক্ষক",
    icon: IconUsers,
    description: "অভিজ্ঞ ও যোগ্য শিক্ষকদের দ্বারা পরিচালিত ক্লাস।",
  },
  {
    title: "মানসম্মত স্টাডি ম্যাটেরিয়ালস",
    icon: IconFileText,
    description: "উচ্চমানের ও সুশৃঙ্খল স্টাডি উপকরণ পাওয়া যাবে।",
  },
  {
    title: "কনসেপ্ট বেইজড ক্লাস",
    icon: IconGroup,
    description: "প্রতিটি বিষয় গভীরভাবে বুঝতে সহায়ক কনসেপ্টভিত্তিক ক্লাস।",
  },
  {
    title: "ইন্টেনসিভ প্রোগ্রাম সিস্টেম",
    icon: IconListChecks,
    description: "দ্রুত প্রস্তুতির জন্য ঘন ও লক্ষ্যভিত্তিক প্রোগ্রাম সিস্টেম।",
  },
  {
    title: "সার্বক্ষণিক Q&A সেবা",
    icon: IconHelpCircle,
    description: "আপনার প্রশ্নের জন্য সার্বক্ষণিক সহযোগিতা ব্যবস্থা।",
  },
  {
    title: "Auto SMS রেজাল্ট",
    icon: IconMail,
    description: "পরীক্ষার ফলাফল সঙ্গে সঙ্গে এসএমএসের মাধ্যমে পাওয়া যাবে।",
  },
  {
    title: "এক্সাম এনালাইসিস রিপোর্ট",
    icon: IconBarChart3,
    description: "আপনার পারফরম্যান্সের বিস্তারিত বিশ্লেষণ রিপোর্ট।",
  },
];

// --- MOTION VARIANTS ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};
const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 10,
    },
  },
};

// --- MAIN COMPONENT ---
const ServicesSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 text-balance font-sans overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold  mb-2">
            আমাদের অন্যান্য সেবা সমূহ
          </h2>
          <p className="text-xl  mb-12 max-w-2xl mx-auto">
            আপনার সাফল্যের জন্য আমাদের সব সেবার বিস্তারিত জানুন।
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className="group flex flex-col items-center p-6 sm:p-8 bg-white border border-gray-200 rounded-2xl shadow-xl transition-all duration-300 transform hover:shadow-2xl hover:scale-[1.03] hover:border-emerald-400/70"
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                boxShadow:
                  "0 10px 15px -3px rgba(16, 185, 129, 0.3), 0 4px 6px -2px rgba(16, 185, 129, 0.05)",
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <div className="p-4 mb-4 rounded-full bg-emerald-100 text-emerald-600 ring-4 ring-emerald-500/30 group-hover:bg-emerald-200 transition-colors duration-300">
                <service.icon className="size-8 md:size-10" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 mt-2">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 hidden md:block">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
