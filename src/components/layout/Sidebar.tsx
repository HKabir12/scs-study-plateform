"use client";

import React from "react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
} from "../ui/sidebar";
import Link from "next/link";
import Image from "next/image";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import {
  BarChart3,
  BookOpen,
  ClipboardCheck,
  CreditCard,
  FilePlus2,
  Home,
  LayoutDashboard,
  LogOut,
  Megaphone,
  MessageCircle,
  Notebook,
  Settings,
  User,
  Users,
} from "lucide-react";
const adminLinks = [
  {
    label: "অ্যাডমিন ড্যাশবোর্ড",
    href: "/dashboard/admin/users",
    icon: LayoutDashboard,
  },
  {
    label: "ইউজার ম্যানেজমেন্ট",
    href: "/dashboard/admin/users",
    icon: Users,
  },
  {
    label: "কোর্স ম্যানেজমেন্ট",
    href: "/admin/courses",
    icon: BookOpen,
  },
  {
    label: "পেমেন্ট হিস্টোরি",
    href: "/admin/payments",
    icon: CreditCard,
  },
  {
    label: "রিপোর্ট / অ্যানালিটিকস",
    href: "/admin/reports",
    icon: BarChart3,
  },
  {
    label: "সাপোর্ট টিকেট",
    href: "/admin/support",
    icon: MessageCircle,
  },
  {
    label: "সেটিংস",
    href: "/admin/settings",
    icon: Settings,
  },
];
const moderatorLinks = [
  {
    label: "ড্যাশবোর্ড",
    href: "/moderator/dashboard",
    icon: Home,
  },
  {
    label: "Marquee Control",
    href: "/dashboard/moderator/marquee",
    icon: Megaphone,
  },
  {
    label: "কোর্স ম্যানেজ করুন",
    href: "/moderator/manage-courses",
    icon: Notebook,
  },
  {
    label: "শিক্ষার্থী তালিকা",
    href: "/moderator/students",
    icon: Users,
  },
  {
    label: "কুইজ / এক্সাম তৈরি",
    href: "/moderator/create-quiz",
    icon: FilePlus2,
  },
  {
    label: "ফলাফল দেখুন",
    href: "/moderator/results",
    icon: BarChart3,
  },
  {
    label: "প্রোফাইল",
    href: "/moderator/profile",
    icon: User,
  },
  {
    label: "সেটিংস",
    href: "/moderator/settings",
    icon: Settings,
  },
];
const studentLinks = [
  {
    label: "ড্যাশবোর্ড",
    href: "/student/dashboard",
    icon: Home,
  },
  {
    label: "আমার কোর্স",
    href: "/student/courses",
    icon: BookOpen,
  },
  {
    label: "পরীক্ষা / কুইজ",
    href: "/student/exams",
    icon: ClipboardCheck,
  },
  {
    label: "রেজাল্ট",
    href: "/student/results",
    icon: BarChart3,
  },
  {
    label: "প্রোফাইল",
    href: "/student/profile",
    icon: User,
  },
  {
    label: "সেটিংস",
    href: "/student/settings",
    icon: Settings,
  },
];

import { useSession, signOut } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const DashboardSidebar = () => {
  const { data: session } = useSession();
  const role = session?.user?.role || "student";
  console.log("object",role)

  const links =
    role === "admin"
      ? adminLinks
      : role === "moderator"
      ? moderatorLinks
      : studentLinks;
  const handleLogout = () => signOut({ callbackUrl: "/" });
  return (
    <div>
      <Sidebar collapsible="icon">
        <SidebarHeader className="py-4">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/">
                  <Image src="/scslogo.jpg" alt="scs" width={20} height={20} />
                  <span>SCS</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarSeparator />
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Application</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {links.map((item) => (
                  <SidebarMenuItem key={item.label}>
                    <SidebarMenuButton asChild>
                      <Link href={item.href}>
                        <item.icon />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                    {item.label === "Inbox" && (
                      <SidebarMenuBadge>24</SidebarMenuBadge>
                    )}
                  </SidebarMenuItem>
                ))}
                <SidebarMenuItem
                  onClick={handleLogout}
                  className="text-red-600 hover:bg-red-100"
                >
                  <SidebarMenuButton asChild>
                    <Link href="/#">
                      <LogOut />
                      Logout
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <Avatar>
                      <AvatarImage
                        src={session?.user?.image || "/default-avatar.png"}
                      />
                      <AvatarFallback>
                        {session?.user?.name?.[0] || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Account</DropdownMenuItem>
                  <DropdownMenuItem>Setting</DropdownMenuItem>
                  <DropdownMenuItem>Sign out</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>
    </div>
  );
};

export default DashboardSidebar;
