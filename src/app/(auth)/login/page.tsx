import React from "react";
import SignupFormDemo from "../signin/signup-form-demo";
import { LoginLottieFile } from "./components/LoginLottieFile";

export const metadata = {
  title: "লগইন পেজ । সাফওয়ান’স কেমিস্ট্রি সলিউশন",
  description: "লগইন পেজ । সাফওয়ান’স কেমিস্ট্রি সলিউশন",
};
const LoginPage = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center py-6 sm:space-y-0 md:space-x-8">
      <SignupFormDemo />
      <LoginLottieFile />
    </div>
  );
};

export default LoginPage;
