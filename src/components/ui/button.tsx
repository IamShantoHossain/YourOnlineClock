import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import { RiLoader2Fill } from "react-icons/ri";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center relative active:scale-[97%] duration-75 justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline: "border text-primary border-primary border-1",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-full gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-full px-6 has-[>svg]:px-4 text-lg",
        xl: "h-11 rounded-full px-6 has-[>svg]:px-4 text-lg",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  isLoading = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
    isLoading?: boolean | string;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...props}
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, className }),
        isLoading && "text-transparent",
        isLoading || (props.disabled && "select-none"),
      )}
      type={props.type || "button"}
      disabled={!!isLoading || props.disabled}
    >
      {props.children}
      {typeof isLoading === "string" ? (
        <span
          className={cn(
            "text-primary-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none",
          )}
        >
          {isLoading}
        </span>
      ) : (
        isLoading && (
          <RiLoader2Fill className="text-primary-foreground absolute top-1/2 left-1/2 size-5 -translate-x-1/2 -translate-y-1/2 animate-spin" />
        )
      )}
    </Comp>
  );
}

export { Button, buttonVariants };
