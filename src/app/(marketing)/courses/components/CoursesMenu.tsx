"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CoursesMenu({
  onCategoryChange,
}: {
  onCategoryChange?: (category: string) => void;
}) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const handleSelect = (category: string) => {
    setSelectedCategory(category);
    onCategoryChange?.(category);
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      <Button
        variant={selectedCategory === "all" ? "default" : "outline"}
        onClick={() => handleSelect("all")}
      >
        সব কোর্স
      </Button>

      <Button
        variant={selectedCategory === "ssc" ? "default" : "outline"}
        onClick={() => handleSelect("ssc")}
      >
        এসএসসি কোর্স
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">এইচএসসি কোর্স ▾</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleSelect("hsc-11")}>
            একাদশ (HSC-11)
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("hsc-12")}>
            দ্বাদশ (HSC-12)
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Button
        variant={selectedCategory === "crash" ? "default" : "outline"}
        onClick={() => handleSelect("crash")}
      >
        ক্র্যাশ কোর্স
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">অ্যাডমিশন কোর্স ▾</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem onClick={() => handleSelect("medical")}>
            মেডিকেল
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("varsity")}>
            ভার্সিটি
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleSelect("engineering")}>
            ইঞ্জিনিয়ারিং
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
