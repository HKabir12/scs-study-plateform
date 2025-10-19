// src/app/layout.tsx (server component, NO "use client")
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  );
}
