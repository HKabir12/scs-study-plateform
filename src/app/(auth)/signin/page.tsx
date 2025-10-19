import SignupForm from "@/app/(auth)/signin/signup-form-demo";
import React from "react";
import SigninLottieFile from "./components/SigninLottieFile";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "সাইন আপ পেজ । সাফওয়ান’স কেমিস্ট্রি সলিউশন",
  description: "সাইন আপ পেজ । সাফওয়ান’স কেমিস্ট্রি সলিউশন",
};
const SignUp = () => {
  return (
    <>
      <Navbar></Navbar>
      <div className="flex flex-col-reverse md:flex-row items-center justify-center py-6 sm:space-y-0 md:space-x-8">
        <SignupForm />
        <SigninLottieFile />
      </div>
      <Footer></Footer>
    </>
  );
};

export default SignUp;
