"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function CoursesMenu() {
  return (
    <div className="flex flex-wrap justify-center gap-4 mb-10">
      <Link href="#">
        <Button variant="outline"> কোর্সসমূহ:</Button>
      </Link>
      <Link href="#">
        <Button variant="outline">এসএসসি কোর্স</Button>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">এইচএসসি কোর্স ▾</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Link href="#">একাদশ (HSC-11)</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="#">দ্বাদশ (HSC-12)</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Link href="#">
        <Button variant="outline">ক্র্যাশ কোর্স</Button>
      </Link>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">অ্যাডমিশন কোর্স ▾</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Link href="#">মেডিকেল</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="#">ভার্সিটি</Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="#">ইঞ্জিনিয়ারিং</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
