import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HeroSection() {
  return (
    <main className="">
      <section className="pb-24 md:pb-32 lg:pb-56">
        <div className="relative mx-auto flex max-w-7xl flex-col px-6 lg:flex-row lg:items-center">
          
          {/* Text Content */}
          <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
            <h1 className="mt-8 max-w-2xl text-balance text-4xl font-medium md:text-4xl  xl:text-6xl">
               Safwan’s  Chemistry Solution
            </h1>
            <p className="mt-8 max-w-2xl text-pretty text-lg">
              Your Ultimate Destination for Comprehensive Chemistry
              Resources. Your Journey to Mastery Starts Here!
            </p>

            <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
              <Button asChild size="lg" className="px-5 text-base">
                <Link href="#link">
                  <span className="text-nowrap">Start Building</span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="ghost" className="px-5 text-base">
                <Link href="#link">
                  <span className="text-nowrap">Request a demo</span>
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
