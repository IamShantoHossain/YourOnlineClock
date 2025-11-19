"use client";
import { cn } from "@/lib/utils";
import * as React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { Button } from "./button";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  const [showPassword, setShowPassword] = React.useState(false);

  const Wrapper: React.ElementType =
    type === "password" ? "div" : React.Fragment;

  return (
    <Wrapper className="relative">
      {type === "password" && (
        <Button
          onClick={() => setShowPassword((prev) => !prev)}
          size={"icon"}
          variant={"ghost"}
          className="absolute top-1/2 right-2 -translate-y-1/2"
        >
          {showPassword ? <FaEye /> : <FaEyeSlash />}
        </Button>
      )}
      <input
        {...props}
        type={type == "password" && showPassword ? "text" : type}
        data-slot="input"
        className={cn(
          "file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/10 border-input/70 h-10 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          "focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
          "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
          className,
        )}
      />
    </Wrapper>
  );
}

export { Input };
