import { z } from "zod";

const signInFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, "Password is required"),
});

const signUpFormSchema = z.object({
  name: z.string().trim().min(1, "Name is required"),
  email: z.string().email(),
  password: z.string().min(8, "Min 8 characters"),
});

export { signInFormSchema, signUpFormSchema };
