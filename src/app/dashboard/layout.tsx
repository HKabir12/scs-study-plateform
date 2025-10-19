import { ThemeProvider } from "next-themes";
import { cookies } from "next/headers";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/layout/Sidebar";

export const metadata = {
  title: "Dashboard | সাফওয়ান’স কেমিস্ট্রি সলিউশন",
  description: "ব্যবহারকারীর ড্যাশবোর্ড পেজ",
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <div>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <SidebarProvider defaultOpen={defaultOpen}>
          <div className="flex min-h-screen">
            <DashboardSidebar />
            <main className="flex-1 p-4">{children}</main>
          </div>
        </SidebarProvider>
      </ThemeProvider>
    </div>
  );
}
