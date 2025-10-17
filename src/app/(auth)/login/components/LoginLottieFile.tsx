"use client";
import Lottie from "lottie-react";
import loginAnimation from "@/assets/lottie/Login.json";
import React from "react";

export const LoginLottieFile = () => {
  return (
    <div>
      <Lottie
        animationData={loginAnimation} 
        loop={true} // play repeatedly
        style={{ height: 400, width: 400 }}
        
      />
    </div>
  );
};
