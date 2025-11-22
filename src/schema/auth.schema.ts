import z from "zod";

const loginSchema = z.object({
  email: z.email("Please enter a valid email address"),

  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters long"),
});

export const authSchema = {
  loginSchema,
};

export type LoginInputT = z.infer<typeof loginSchema>;
