"use client";

import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session } = useSession();

  const role = session?.user?.role || "student";
  console.log("object1", role);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">{role}ড্যাশবোর্ড</h1>
      {/* <p>Welcome, {user?.name}!</p>
      <p>Your role: {user?.role}</p> */}
    </div>
  );
};

export default Dashboard;
