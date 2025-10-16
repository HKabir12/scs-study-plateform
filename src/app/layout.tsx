import type { Metadata } from "next";

import "./globals.css";

import { ThemeProvider } from "next-themes";
import Navbar from "@/components/layout/Navbar";

import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "সাফওয়ান’স কেমিস্ট্রি সলিউশন",
  description: "একটি ব্যাপক কেমিস্ট্রি শেখার প্ল্যাটফর্ম।",
  icons: {
    icon: "https://i.ibb.co.com/JRCsjDmr/scslogo.jpg",
    shortcut: "https://i.ibb.co.com/JRCsjDmr/scslogo.jpg",
    apple: "https://i.ibb.co.com/JRCsjDmr/scslogo.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
