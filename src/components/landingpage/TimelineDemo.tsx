import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function SuccessTimeline() {
  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built and launched Aceternity UI and Aceternity UI Pro from scratch
          </p>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            I usually run out of copy, but when I see content this big, I try to
            integrate lorem ipsum.
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Lorem ipsum is for people who are too lazy to write copy. But we are
            not. Here are some more example of beautiful designs I built.
          </p>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Deployed 5 new components on Aceternity today
          </p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Card grid component
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Startup template Aceternity
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Random file upload lol
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Himesh Reshammiya Music CD
            </div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">
              ✅ Salman Bhai Fan Club registrations open
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="max-w-7xl mx-auto pt-6 text-center justify-center bg-white dark:bg-neutral-950 font-sans md:px-10 mt-20">
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white max-w-4xl text-center justify-center">
        আমাদের সাফল্য
      </h2>
      <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-2xl mb-12 text-center justify-center">
        আমরা গত তিন বছরে আমাদের শিক্ষার্থীদের অসাধারণ সাফল্য অর্জনে সাহায্য
        করেছি। নিচে কিছু উল্লেখযোগ্য অর্জন দেখানো হলো:
      </p>
      <Timeline data={data} />
    </div>
  );
}
