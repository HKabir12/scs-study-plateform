import { Separator } from "@/components/ui/separator";
import CoursesList from "./components/CoursesList";
import CoursesMenu from "./components/CoursesMenu";

export const metadata = {
  title: "কোর্সসমূহ | সাফওয়ান’স কেমিস্ট্রি সলিউশন",
  description:
    "সাফওয়ান’স কেমিস্ট্রি সলিউশন-এর সব কোর্স সম্পর্কে জানুন — এইচএসসি, অ্যাডমিশন ও ক্র্যাশ কোর্স।",
};

export default function CoursesPage() {
  return (
    <main className="min-h-screen  pb-20 pt-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold ">আমাদের জনপ্রিয় কোর্সসমূহ</h1>
          <p className="mt-4 ">
            পাবনার সবচেয়ে বিশ্বস্ত কেমিস্ট্রি ইনস্টিটিউট — সাফওয়ান’স
            কেমিস্ট্রি সলিউশন
          </p>
          <Separator className="my-6 mx-auto w-24 bg-primary h-1 rounded" />
        </div>
        <CoursesMenu />
        <CoursesList />
      </div>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"></div>
    </main>
  );
}
