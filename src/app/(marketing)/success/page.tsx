import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Metadata } from "next";
import React from "react";
 export const metadata: Metadata ={
  title: "সফল শিক্ষার্থীরা | সাফওয়ান’স কেমিস্ট্রি সলিউশন",
  description:
    "আমাদের সহায়তায় যারা তাদের স্বপ্ন পূরণ করেছে, সেই সফল শিক্ষার্থীদের অভিজ্ঞতা জানুন।",
};

const SuccessPage = () => {
  const testimonials = [
    // ---------- SSC ----------
    {
      quote:
        "আমি Safwan স্যারের SSC ব্যাচে পড়েছি। Chemistry এখন আমার প্রিয় বিষয়!",
      name: "Rafi Hasan",
      designation: "SSC Batch 2023",
      src: "https://i.ibb.co.com/CKZHz6JY/kabir-resume.jpg",
    },
    {
      quote: "স্যারের সহজ ব্যাখ্যায় বোর্ড পরীক্ষায় Chemistry খুব সহজ লেগেছে!",
      name: "Nusrat Jahan",
      designation: "SSC Batch 2024",
      src: "https://i.ibb.co.com/tMbhBq4Q/zabir.jpg",
    },

    // ---------- HSC ----------
    {
      quote:
        "Safwan স্যার HSC এর জন্য দারুণভাবে প্রস্তুত করিয়েছেন, organic chemistry এখন আমার শক্ত দিক!",
      name: "Mehedi Rahman",
      designation: "HSC Batch 2023",
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=3000&auto=format&fit=crop",
    },
    {
      quote:
        "স্যারের crash course অসাধারণ! অল্প সময়ে পুরো syllabus revise করতে পেরেছি।",
      name: "Taslima Akter",
      designation: "HSC Batch 2024",
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3000&auto=format&fit=crop",
    },
    {
      quote: "Admission এর আগে স্যারের mock test গুলো অনেক হেল্প করেছে!",
      name: "Mubin Al Hasan",
      designation: "HSC Batch 2022",
      src: "https://images.unsplash.com/photo-1603415526960-f8f0a5f1d9b1?q=80&w=3000&auto=format&fit=crop",
    },

    // ---------- Admission ----------
    {
      quote:
        "Dhaka University admission এ Chemistry তে full confident ছিলাম — সব credit Safwan স্যারকে!",
      name: "Zihad Chowdhury",
      designation: "Dhaka University (2024)",
      src: "https://i.ibb.co.com/BVmw5GkR/zihad.jpg",
    },
    {
      quote:
        "Medical admission এ Chemistry প্রশ্ন গুলো স্যারের ক্লাস থেকেই এসেছিল!",
      name: "Shuvo Rahman",
      designation: "Medical Admission 2024",
      src: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=3000&auto=format&fit=crop",
    },
    {
      quote:
        "Varsity preparation এ Safwan’s Chemistry Solution ছিল আমার একমাত্র ভরসা।",
      name: "Tania Afrin",
      designation: "Varsity Admission 2023",
      src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&w=3000&auto=format&fit=crop",
    },
    {
      quote:
        "স্যারের guidance এ আমি BUET admission এ Chemistry part সহজে solve করতে পেরেছি।",
      name: "Zarif Khan",
      designation: "Engineering Admission 2024",
      src: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?q=80&w=3000&auto=format&fit=crop",
    },
    {
      quote:
        "Safwan স্যারের concept clear করার style আমাকে পুরো chemistry ভালোবাসতে শিখিয়েছে।",
      name: "Rumana Islam",
      designation: "Medical Admission 2023",
      src: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&w=3000&auto=format&fit=crop",
    },
  ];

  return (
    <>
    <Navbar></Navbar>
    <div className="container mx-auto px-6 md:px-12 py-6">
      <h1 className="text-center justify-center lg:text-5xl md:text-4xl text-3xl font-bold mb-4">
        সফল শিক্ষার্থীরা
      </h1>
      <p className="text-center text-lg">
        আমাদের সহায়তায় যারা তাদের স্বপ্ন পূরণ করেছে, সেই সফল শিক্ষার্থীদের
        অভিজ্ঞতা জানুন।
      </p>

      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
    <Footer></Footer>
    </>
  );
};

export default SuccessPage;
