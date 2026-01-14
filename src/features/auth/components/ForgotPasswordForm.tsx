"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import assets from "@/lib/assets";
import { handleRTKMutation } from "@/lib/handleRTKMutation";
import { cn } from "@/lib/utils";
import { useForgetPasswordMutation } from "@/redux/api/userApi";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a valid email address"),
});

const ForgotPasswordForm = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const [showConfirmed, setShowConfirmed] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const [forgetPassword] = useForgetPasswordMutation();

  const form = useForm<z.infer<typeof forgotPasswordSchema>>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: z.infer<typeof forgotPasswordSchema>) {
    await handleRTKMutation(forgetPassword(values), {
      onSuccess: (data) => {
        toast.success("Reset link sent successfully");
        setSubmittedEmail(values.email);
        setShowConfirmed(true);
      },
    });
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <Image
            src={assets.logoUrl}
            height={408}
            width={612}
            placeholder="blur"
            alt="Logo"
            className="mx-auto w-26"
          />
          <CardTitle className="text-2xl">Forgot Password</CardTitle>
          <CardDescription>
            {!showConfirmed
              ? "Enter your email to receive password reset instructions"
              : "We’ve sent password reset instructions to your email"}
          </CardDescription>
        </CardHeader>

        <CardContent>
          {showConfirmed ? (
            <div className="space-y-3 text-center">
              <p>
                An email has been sent to <strong>{submittedEmail}</strong>.
              </p>
              <p>Please check your inbox (and spam folder).</p>
            </div>
          ) : (
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-4"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full">
                  Send Reset Link
                </Button>
              </form>
            </Form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ForgotPasswordForm;
