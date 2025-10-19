import React from "react";

import { LoginLottieFile } from "./components/LoginLottieFile";
import LoginForm from "./components/LoginForm";

export const metadata = {
  title: "লগইন পেজ । সাফওয়ান’স কেমিস্ট্রি সলিউশন",
  description: "লগইন পেজ । সাফওয়ান’স কেমিস্ট্রি সলিউশন",
};
const LoginPage = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center justify-center py-6 sm:space-y-0 md:space-x-8">
      <LoginForm></LoginForm>
      <LoginLottieFile />
    </div>
  );
};

export default LoginPage;
