"use client";
import React from 'react'
import Lottie from 'lottie-react';
import signinAnimation from '@/assets/lottie/Signin.json';
const SigninLottieFile = () => {
  return (
    <div>
      <Lottie
        animationData={signinAnimation}
        loop={true}
        style={{ height: 400, width: 400 }}
      />
    </div>
  )
}

export default SigninLottieFile
