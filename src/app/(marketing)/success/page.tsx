"use client";

import React, { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const SuccessPage = () => {
  const [selectedBatch, setSelectedBatch] = useState("All");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedStudent, setSelectedStudent] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const students = [
    {
      name: "হুমায়ন কবির",
      batch: "HSC-21",
      university: "জাহাঙ্গীরনগর বিশ্ববিদ্যালয়",
      subject: "তথ্য ও যোগাযোগ প্রযুক্তি ইনস্টিটিউট IIT",
      desc: "Safwan স্যারের ক্লাসের জন্য আমি admission পরীক্ষায় অসাধারণভাবে পারফর্ম করতে পেরেছি।",
      img: "https://i.ibb.co.com/CKZHz6JY/kabir-resume.jpg",
    },
    {
      name: "জাবির হাসান",
      batch: "HSC-22",
      university: "রাজশাহী বিশ্ববিদ্যালয়",
      subject: "বায়োকেমিস্ট্রি",
      desc: "স্যারের ব্যাখ্যা এত সহজ যে কঠিন বিষয়গুলোও সহজে বুঝে ফেলেছি!",
      img: "https://i.ibb.co.com/tMbhBq4Q/zabir.jpg",
    },
    {
      name: "মেহেদি রহমান",
      batch: "HSC-23",
      university: "BUET",
      subject: "Chemical Engineering",
      desc: "স্যারের পড়ানো Organic Chemistry এর কনসেপ্ট এখনো মনে আছে!",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=3000&auto=format&fit=crop",
    },
    {
      name: "তাসলিমা আক্তার",
      batch: "HSC-24",
      university: "চট্টগ্রাম মেডিকেল কলেজ",
      subject: "MBBS",
      desc: "Crash course এ সবকিছু রিভিশন করার সুযোগ পেয়েছিলাম, যা অনেক হেল্পফুল ছিল।",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3000&auto=format&fit=crop",
    },
    {
      name: "জারিফ খান",
      batch: "HSC-24",
      university: "KUET",
      subject: "Materials Science",
      desc: "স্যারের পড়ানোর ধরণে Chemistry এখন অনেক প্রিয় হয়ে গেছে।",
      img: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=3000&auto=format&fit=crop",
    },
    {
      name: "রুমানা ইসলাম",
      batch: "HSC-23",
      university: "Dhaka Medical College",
      subject: "MBBS",
      desc: "Safwan স্যারের কনসেপ্ট ক্লিয়ার করার style একদম ইউনিক!",
      img: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=3000&auto=format&fit=crop",
    },
  ];

  // Filter & Pagination
  const filtered =
    selectedBatch === "All"
      ? students
      : students.filter((s) => s.batch === selectedBatch);
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-12">
        {/* Header */}
        <div className="grid md:grid-cols-2 gap-6 mb-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-4">
              সফল শিক্ষার্থীরা
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg">
              সফল শিক্ষার্থীরা আমাদের সহায়তায় যারা তাদের স্বপ্ন পূরণ করেছে,
              সেই সফল শিক্ষার্থীদের অভিজ্ঞতা জানুন।
            </p>
          </div>

          {/* Dropdown */}
          <div className="flex md:justify-end justify-center">
            <Select onValueChange={setSelectedBatch}>
              <SelectTrigger className="w-[200px] bg-white dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700">
                <SelectValue placeholder="সব ব্যাচ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="All">সব ব্যাচ</SelectItem>
                <SelectItem value="HSC-21">HSC-21</SelectItem>
                <SelectItem value="HSC-22">HSC-22</SelectItem>
                <SelectItem value="HSC-23">HSC-23</SelectItem>
                <SelectItem value="HSC-24">HSC-24</SelectItem>
                <SelectItem value="HSC-25">HSC-25</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {paginated.map((student, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex bg-white dark:bg-zinc-900 shadow-md rounded-xl overflow-hidden border border-gray-200 dark:border-zinc-700"
            >
              {/* Image */}
              <div className="relative w-40 h-40 flex-shrink-0">
                <Image
                  src={student.img}
                  alt={student.name}
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-emerald-600 text-white text-sm text-center py-1 font-semibold">
                  {student.batch}
                </div>
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-emerald-700 dark:text-emerald-400">
                    {student.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    🎓 {student.university}
                  </p>
                  <p className="text-gray-500 text-sm mb-2">
                    📘 {student.subject}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 text-sm line-clamp-2">
                    {student.desc}
                  </p>
                </div>

                <Button
                  onClick={() => setSelectedStudent(student)}
                  variant="ghost"
                  size="sm"
                  className="text-emerald-600 hover:text-emerald-700 mt-2 flex items-center gap-1"
                >
                  আরও দেখুন <ChevronRight size={16} />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-10 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  aria-disabled={currentPage === 1}
                />
              </PaginationItem>
              <PaginationItem className="text-sm text-gray-700 dark:text-gray-300">
                {currentPage} / {totalPages}
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  onClick={() =>
                    setCurrentPage((p) => Math.min(totalPages, p + 1))
                  }
                  aria-disabled={currentPage === totalPages}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>

      {/* Dialog */}
      <Dialog
        open={!!selectedStudent}
        onOpenChange={() => setSelectedStudent(null)}
      >
        <DialogContent className="max-w-lg">
          {selectedStudent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-emerald-600">
                  {selectedStudent.name}
                </DialogTitle>
                <DialogDescription>
                  {selectedStudent.batch} | {selectedStudent.university}
                </DialogDescription>
              </DialogHeader>
              <div className="mt-3">
                <p className="text-gray-700 dark:text-gray-300 text-sm">
                  {selectedStudent.desc}
                </p>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </>
  );
};

export default SuccessPage;
