import { ThemeProvider } from "next-themes";
import { cookies } from "next/headers";
import { SidebarProvider } from "@/components/ui/sidebar";
import DashboardSidebar from "@/components/layout/Sidebar";
import SidebarIcon from "@/components/utilities/SidebarIcon";

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
          <DashboardSidebar></DashboardSidebar>

          <main className="w-full">
            <SidebarIcon></SidebarIcon>
            <div className="px-4">{children}</div>
          </main>
        </SidebarProvider>
      </ThemeProvider>
    </div>
  );
}
