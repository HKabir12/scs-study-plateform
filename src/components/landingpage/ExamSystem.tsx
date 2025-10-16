import React from "react";

const ExamSystem = () => {
  return (
    <div className="max-w-7xl mx-auto py-6 px-4 md:px-8 lg:px-10   rounded-xl">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-black dark:text-white">
        আমাদের পরীক্ষার সিস্টেম
      </h2>
      <p className="text-center text-neutral-700 dark:text-neutral-300 max-w-2xl mx-auto mb-12">
        সাফল্যের পথে নিয়মিত পরীক্ষা ও মনিটরিং অত্যন্ত গুরুত্বপূর্ণ। আমাদের
        শিক্ষার্থীদের জন্য তৈরি হয়েছে একটি সম্পূর্ণ আধুনিক পরীক্ষা ব্যবস্থা:
      </p>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Weekly Exam */}
        <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
          <div className="text-4xl mb-4 animate-bounce text-indigo-500">📅</div>
          <h3 className="font-semibold text-lg mb-2">সাপ্তাহিক পরীক্ষা</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            প্রতি শনিবার নিয়মিত করা হবে সাপ্তাহিক পরীক্ষা। শিক্ষার্থীদের
            অগ্রগতি নিয়মিত মনিটর করা হবে।
          </p>
        </div>

        {/* Monthly Exam */}
        <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
          <div className="text-4xl mb-4 animate-bounce text-green-500">🗓️</div>
          <h3 className="font-semibold text-lg mb-2">মাসিক পরীক্ষা</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            প্রতি মাসের ৩০ তারিখে মাসিক পরীক্ষা। ফলাফল প্রকাশ হবে কয়েক দিনের
            মধ্যে।
          </p>
        </div>

        {/* Special Model Test */}
        <div className="p-6 bg-white dark:bg-zinc-800 rounded-xl shadow-md hover:shadow-lg transition duration-300 text-center">
          <div className="text-4xl mb-4 animate-bounce text-yellow-500">🏆</div>
          <h3 className="font-semibold text-lg mb-2">বিশেষ মডেল টেস্ট</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            বড় পরীক্ষা বা ভর্তি পরীক্ষার আগে বিশেষ মডেল টেস্ট। ভালো ফলাফল করলে
            স্পেশাল ব্যাচে সুযোগ। ফলাফল প্রকাশের পর prize & merit recognition।
          </p>
        </div>
      </div>

      {/* Result & Notification */}
      <div className="mt-12 text-center">
        <h4 className="text-xl font-semibold mb-4 text-black dark:text-white">
          ফলাফল প্রকাশ ও মনিটরিং
        </h4>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          পরীক্ষার ফলাফল কয়েক দিনের মধ্যে স্বয়ংক্রিয়ভাবে প্রকাশিত হবে। ফলাফল
          অনুযায়ী শিক্ষার্থীকে বিশেষ ব্যাচে বা অন্য ব্যাচে নির্দেশ দেওয়া হবে।
          যদি কোনো শিক্ষার্থী দুর্বল ফলাফল করে, তাদের অভিভাবককে SMS বা মেসেজের
          মাধ্যমে জানানো হবে। ভালো ফলাফল করলে শিক্ষার্থীকে বিশেষ ব্যাচ ও
          প্রাইজিং সুযোগ দেওয়া হবে।
        </p>
      </div>
    </div>
  );
};

export default ExamSystem;
