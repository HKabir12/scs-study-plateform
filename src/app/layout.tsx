// src/app/layout.tsx (server component, NO "use client")
import type { Metadata } from "next";
import "./globals.css";

import ClientProviders from "@/Providers/authProvider/ClientProviders";

export const metadata: Metadata = {
  title: "সাফওয়ান’স কেমিস্ট্রি সলিউশন",
  description: "একটি ব্যাপক কেমিস্ট্রি শেখার প্ল্যাটফর্ম।",
  icons: {
    icon: "https://i.ibb.co/JRCsjDmr/scslogo.jpg",
    shortcut: "https://i.ibb.co/JRCsjDmr/scslogo.jpg",
    apple: "https://i.ibb.co/JRCsjDmr/scslogo.jpg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ClientProviders>
          <main>{children}</main>
        </ClientProviders>
      </body>
    </html>
  );
}
