import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export default function Container({ children, className }: ContainerProps) {
  return (
    <section className={cn("mx-auto w-full max-w-360 p-3", className)}>
      {children}
    </section>
  );
}

export const PageContainer = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn("flex h-full min-h-[92dvh] flex-1 flex-col", className)}>
      {children}
    </div>
  );
};
