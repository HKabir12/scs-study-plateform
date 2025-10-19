import { Separator } from "@/components/ui/separator";
import { Metadata } from "next";
import CoursesPage from "./components/CoursesPage";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "কোর্সসমূহ | সাফওয়ান’স কেমিস্ট্রি সলিউশন",
  description:
    "পাবনার সবচেয়ে বিশ্বস্ত HSC ও ভর্তি প্রস্তুতির কেমিস্ট্রি ইনস্টিটিউট — সাফওয়ান’স কেমিস্ট্রি সলিউশন এর জনপ্রিয় কোর্সসমূহ সম্পর্কে জানুন।",
};

export default function AllCoursesPage() {
  return (
    <>
    <Navbar></Navbar>
    <main className="min-h-screen pt-6">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">আমাদের জনপ্রিয় কোর্সসমূহ</h1>
          <p className="mt-4 ">
            পাবনার সবচেয়ে বিশ্বস্ত কেমিস্ট্রি ইনস্টিটিউট — সাফওয়ান’স
            কেমিস্ট্রি সলিউশন
          </p>
          <Separator className="my-6 mx-auto w-24 bg-primary h-1 rounded" />
        </div>
        <CoursesPage></CoursesPage>
      </div>
    </main>
    <Footer></Footer>
     </>
  );
}
