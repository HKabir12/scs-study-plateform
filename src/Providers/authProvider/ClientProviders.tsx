// src/app/ClientProviders.tsx (client component)
"use client";

import { ThemeProvider } from "next-themes";
import { SessionProvider } from "next-auth/react";
import React from "react";

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
        {children}
      </SessionProvider>
    </ThemeProvider>
  );
};

export default ClientProviders;
