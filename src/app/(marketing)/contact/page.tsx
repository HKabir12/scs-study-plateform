"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";

export default function ContactPage() {
  return (
    <main className="min-h-screen  pt-6 pb-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold ">আমাদের সাথে যোগাযোগ করুন</h1>
          <p className="mt-4 ">
            যে কোনো তথ্য, কোর্স বা ভর্তি সম্পর্কিত প্রশ্নের জন্য নিচের ফর্মটি
            ব্যবহার করুন।
          </p>
          <Separator className="my-6 mx-auto w-24 bg-primary h-1 rounded" />
        </div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div>
            <label className="block mb-2 ">নাম</label>
            <Input
              type="text"
              placeholder="আপনার নাম লিখুন"
              className="w-full"
            />
          </div>

          <div>
            <label className="block mb-2 ">ইমেইল</label>
            <Input
              type="email"
              placeholder="আপনার ইমেইল লিখুন"
              className="w-full"
            />
          </div>

          <div>
            <label className="block mb-2 ">মোবাইল নম্বর</label>
            <Input
              type="tel"
              placeholder="আপনার মোবাইল নম্বর লিখুন"
              className="w-full"
            />
          </div>

          <div>
            <label className="block mb-2 ">বার্তা</label>
            <Textarea
              placeholder="আপনার বার্তা লিখুন"
              className="w-full"
              rows={5}
            />
          </div>

          <div className="text-center">
            <Button type="submit" className="px-10 py-3">
              পাঠান
            </Button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="mt-16 text-center  space-y-2">
          <p>ঠিকানা: রাধানগর এডওয়ার্ড কলেজ পাবনা</p>
          <p>ইমেইল: info@safwanschemistry.com</p>
          <p>মোবাইল: +880 1700 000000</p>
        </div>
      </div>
    </main>
  );
}
