"use client";
import { useTheme } from "next-themes";
import { ReactNode } from "react";
import { Toaster } from "sonner";

function ToasterProvider({ children }: { children: ReactNode }) {
  const { theme } = useTheme();

  const currentTheme =
    theme == "dark" ? "dark" : theme == "light" ? "light" : "system";

  return (
    <>
      <Toaster
        // expand
        closeButton
        richColors
        icons={
          {
            // success: <p className="mr-2 text-xl">🎉</p>,
          }
        }
        theme={currentTheme}
        swipeDirections={["right", "top", "bottom"]}
        position="top-right"
        // toastOptions={{
        //   classNames: {
        //     success: "!border-[var(--success-border)]/10",
        //     error: "!border-[var(--error-border)]/10",
        //     warning: "!border-[var(--warning-border)]/10",
        //   },
        // }}
      />
      {children}
    </>
  );
}

export default ToasterProvider;
