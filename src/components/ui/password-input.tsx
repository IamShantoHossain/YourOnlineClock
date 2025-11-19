import * as React from "react";
import { FaEye } from "react-icons/fa6";
import { Button } from "./button";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <div>
      <Button variant="ghost" size="icon">
        <FaEye />
      </Button>
      <Input {...props} />
    </div>
  );
}

export { Input };
