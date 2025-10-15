import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const metadata = {
  title: "আমাদের সম্পর্কে | সাফওয়ান’স কেমিস্ট্রি সলিউশন",
  description:
    "পাবনার সবচেয়ে বিশ্বস্ত HSC ও ভর্তি প্রস্তুতির কেমিস্ট্রি ইনস্টিটিউট — সাফওয়ান’স কেমিস্ট্রি সলিউশন সম্পর্কে জানুন।",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen  ">
      {/* Hero Section */}
      <section className="relative py-6 ">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold ">
            সম্পর্কে{" "}
            <span className="text-blue-600">সাফওয়ান’স কেমিস্ট্রি সলিউশন</span>
          </h1>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed">
            “সাফওয়ান’স কেমিস্ট্রি সলিউশন (SCS)” পাবনার অন্যতম শীর্ষস্থানীয়
            কেমিস্ট্রি কোচিং ইনস্টিটিউট। আমাদের লক্ষ্য HSC ও ভর্তি পরীক্ষার
            শিক্ষার্থীদের জন্য কেমিস্ট্রিকে সহজ, যুক্তিসঙ্গত ও আনন্দদায়ক করে
            তোলা।
          </p>
        </div>
      </section>

      <Separator className="my-8" />

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 md:px-12  grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-semibold  mb-4">🎯 আমাদের লক্ষ্য</h2>
          <p className=" leading-relaxed mb-6">
            আধুনিক শিক্ষণপদ্ধতি, বাস্তব উদাহরণ ও গভীর ধারণার মাধ্যমে উচ্চমানের
            কেমিস্ট্রি শিক্ষা প্রদান করা — যেন প্রতিটি শিক্ষার্থী আত্মবিশ্বাসী
            হয় এবং বিজ্ঞানের প্রতি সত্যিকারের আগ্রহ তৈরি হয়।
          </p>
          <h2 className="text-3xl font-semibold  mb-4">🌟 আমাদের ভিশন</h2>
          <p className=" leading-relaxed">
            বাংলাদেশের সবচেয়ে বিশ্বস্ত কেমিস্ট্রি শিক্ষাপ্রতিষ্ঠান হিসেবে গড়ে
            ওঠা, যেখানে প্রতি বছর হাজারো শিক্ষার্থী HSC, ভর্তি ও
            মেডিকেল/ইঞ্জিনিয়ারিং পরীক্ষায় সফলতা অর্জন করবে।
          </p>
        </div>
        <div className="relative h-80 w-full">
          <Image
            src="/classroom.jpg"
            alt="SCS Classroom"
            fill
            className="object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      <Separator className="my-8" />

      {/* Teacher Profile */}
      <section className="container mx-auto px-6 md:px-12 py-6 text-center">
        <h2 className="text-4xl font-bold mb-10">আমাদের গাইড ও পরামর্শক</h2>
        <div className="flex flex-col md:flex-row items-center gap-10 justify-center">
          <Image
            src="/safwanvai.jpg"
            alt="Sir Safwan"
            width={220}
            height={220}
            className="rounded-xl shadow-xl object-cover"
          />
          <div className="max-w-md text-left">
            <h3 className="text-2xl font-semibold ">
              মোঃ গোলাম রাব্বী সাফওয়ান
            </h3>
            <p className="text-gray-500 mb-3">
              প্রতিষ্ঠাতা ও প্রধান প্রশিক্ষক, সাফওয়ান’স কেমিস্ট্রি সলিউশন
            </p>
            <p className=" leading-relaxed mb-6">
              সাফওয়ান স্যার একজন নিবেদিতপ্রাণ শিক্ষক যিনি দীর্ঘদিন ধরে HSC ও
              ভর্তি পরীক্ষার কেমিস্ট্রি পড়াচ্ছেন। তাঁর উদ্ভাবনী শিক্ষণশৈলী ও
              পরীক্ষাভিত্তিক কৌশল হাজারো শিক্ষার্থীকে অসাধারণ ফলাফল করতে সাহায্য
              করেছে।
            </p>
            <Link href="/courses">
              <Button>আমাদের কোর্স দেখুন</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl font-semibold pb-3">আমাদের সাফল্য এক নজরে</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "সফলতার বছর", value: "১০+" },
              { label: "সফল শিক্ষার্থী", value: "৫০০০+" },
              { label: "ভর্তি সাফল্যের হার", value: "৯৫%" },
              { label: "অভিজ্ঞ শিক্ষক", value: "৫+" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-xl shadow-md p-6"
              >
                <p className="text-3xl font-bold text-blue-600 mb-2">
                  {item.value}
                </p>
                <p className="text-gray-600 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl font-semibold  mb-4">
          কেমিস্ট্রিতে তোমার যাত্রা শুরু করতে প্রস্তুত?
        </h2>
        <p className=" mb-8 max-w-xl mx-auto">
          আজই সাফওয়ান’স কেমিস্ট্রি সলিউশনে যোগ দাও এবং বিশেষজ্ঞ নির্দেশনা, সেরা
          রিসোর্স ও কাঠামোবদ্ধ শিক্ষার মাধ্যমে তোমার প্রস্তুতিকে পরবর্তী স্তরে
          নিয়ে যাও।
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/courses">
            <Button>কোর্সে ভর্তি হও</Button>
          </Link>
          <Link href="/contact">
            <Button variant="outline">যোগাযোগ করো</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
