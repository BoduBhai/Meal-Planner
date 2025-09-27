"use client";

import { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "./ui/sonner";
import { AlertDialogProvider } from "./ui/alert-dialog-provider";

type ProvidersProps = {
  children: ReactNode;
};

const queryClient = new QueryClient();

const Providers = ({ children }: ProvidersProps) => {
  return (
    <QueryClientProvider client={queryClient}>
      <NextThemesProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <Toaster />
        <AlertDialogProvider />
        {children}
      </NextThemesProvider>
    </QueryClientProvider>
  );
};

export { Providers };
