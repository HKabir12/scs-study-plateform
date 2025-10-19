// src/app/ClientProviders.tsx (client component)
"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import Navbar from "@/components/layout/Navbar";
import React from "react";
import Footer from "@/components/layout/Footer";

const ClientProviders: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <SessionProvider>
        <Navbar />
        {children}
        <Footer/>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default ClientProviders;
