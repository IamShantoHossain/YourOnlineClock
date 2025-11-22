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
import { useLoginAdminMutation } from "@/redux/api/authAPi";
import { authSchema, LoginInputT } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { z } from "zod";

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [login, { isLoading }] = useLoginAdminMutation();
  const router = useRouter();

  const form = useForm<LoginInputT>({
    resolver: zodResolver(authSchema.loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof authSchema.loginSchema>) {
    await handleRTKMutation(login(values), {
      onSuccess: (data) => {
        router.push("/admin/dashboard");
      },
      onError: (error) => {
        console.log(error?.data?.errorDetails);
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
          <CardTitle className="text-2xl">Login Admin</CardTitle>
          <CardDescription>
            Sign in to access the admin dashboard
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="m@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="••••••••"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />

                    <div className="flex justify-end">
                      <Link
                        className="text-primary text-sm hover:opacity-90"
                        href="/auth/forgot-password"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full" isLoading={isLoading}>
                Login
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
