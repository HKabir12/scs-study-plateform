"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
export default function HeroSection() {
  function ColourfulText({ text }: { text: string }) {
    const colors = [
      "rgb(131, 179, 32)",
      "rgb(47, 195, 106)",
      "rgb(42, 169, 210)",
      "rgb(4, 112, 202)",
      "rgb(107, 10, 255)",
      "rgb(183, 0, 218)",
      "rgb(218, 0, 171)",
      "rgb(230, 64, 92)",
      "rgb(232, 98, 63)",
      "rgb(249, 129, 47)",
    ];

    const [currentColors, setCurrentColors] = useState(colors);
    const [count, setCount] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        const shuffled = [...colors].sort(() => Math.random() - 0.5);
        setCurrentColors(shuffled);
        setCount((prev) => prev + 1);
      }, 5000);

      return () => clearInterval(interval);
    }, []);

    return (
      <>
        {text.split("").map((char, index) => (
          <motion.span
            key={`${char}-${count}-${index}`}
            initial={{
              y: 0,
            }}
            animate={{
              color: currentColors[index % currentColors.length],
              y: [0, -3, 0],
              scale: [1, 1.01, 1],
              filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
              opacity: [1, 0.8, 1],
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.05,
            }}
            className="inline-block whitespace-pre font-sans tracking-tight"
          >
            {char}
          </motion.span>
        ))}
      </>
    );
  }
  return (
    <main className="dark:mt-4">
      <section className=" ">
        <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:flex-row lg:items-center">
          {/* Text Content */}
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
            <h1 className="mt-8 max-w-2xl text-xl font-bold leading-tight lg:mt-0 lg:text-5xl">
              <ColourfulText text="SAFWAN’S CHEMISTRY SOLUTION" />
            </h1>

            <p className="mt-8 max-w-2xl text-pretty text-lg">
              আপনার পূর্ণাঙ্গ কেমিস্ট্রি প্রস্তুতির গন্তব্য। এখানে শুরু হচ্ছে
              আপনার মাস্টারি যাত্রা!
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="px-5 text-base">
                <Link href="/courses">
                  <span className="text-nowrap">কোর্সসমূহ</span>
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="px-5 text-base"
              >
                <Link href="/about">
                  <span className="text-nowrap">আমাদের সম্পর্কে</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:mt-0 lg:ml-8 lg:w-1/2 flex justify-center lg:justify-end">
            <Image
              src="/scslogo.jpg"
              alt="Safwan Chemistry Logo"
              width={400}
              height={100}
              className="rounded-lg object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </main>
  );
}
