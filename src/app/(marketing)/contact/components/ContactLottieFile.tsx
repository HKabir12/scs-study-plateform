"use client";
import Lottie from "lottie-react";
import React from "react";
import contactAnimation from "@/assets/lottie/ModernEmail.json";
const ContactLottieFile = () => {
  return (
    <div >
      <Lottie
        animationData={contactAnimation}
        loop={true}
        style={{ height: 400, width: 400 }}
      />
    </div>
  );
};

export default ContactLottieFile;
