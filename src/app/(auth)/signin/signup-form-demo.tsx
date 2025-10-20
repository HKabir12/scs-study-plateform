"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

import { registerUser } from "@/lib/auth";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newUser = await registerUser(formData);
    if (newUser.role === "admin") router.push("/admin");
    else if (newUser.role === "moderator") router.push("/moderator");
    else router.push("/student");

    console.log("User Registered:", newUser);
    alert("✅ সফলভাবে রেজিস্ট্রেশন সম্পন্ন হয়েছে!");
    //router.push("/student"); // redirect to student dashboard
  };

  return (
    <div className="shadow-input mx-auto w-full max-w-md rounded-none bg-white p-4 md:rounded-2xl md:p-8 dark:bg-black">
      <h2 className="text-xl font-bold text-neutral-800 dark:text-neutral-200 text-center">
        নিবন্ধন করুন
      </h2>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300 text-center">
        Safwan’s Chemistry Solution এ আপনার একাউন্ট তৈরি করুন
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-y-0 md:space-x-2">
          <LabelInputContainer>
            <Label htmlFor="firstName">নাম</Label>
            <Input
              id="firstName"
              placeholder="Humaon"
              type="text"
              onChange={handleChange}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastName">শেষ নাম</Label>
            <Input
              id="lastName"
              placeholder="Kabir"
              type="text"
              onChange={handleChange}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">ইমেইল</Label>
          <Input
            id="email"
            placeholder="kabir2003@gmail.com"
            type="email"
            onChange={handleChange}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">পাসওয়ার্ড</Label>
          <Input
            id="password"
            placeholder="••••••••"
            type="password"
            onChange={handleChange}
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-gradient-to-br from-black to-neutral-600 font-medium text-white shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:bg-zinc-800 dark:from-zinc-900 dark:to-zinc-900"
          type="submit"
        >
          সাইন আপ করুন →
        </button>
      </form>
    </div>
  );
}

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);
