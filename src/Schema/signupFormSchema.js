import { z } from "zod";

const signupFormSchema = z
    .object({
        username: z
            .string()
            .min(3, { message: "Username must be at least 3 characters long" })
            .max(20, { message: "Username must be at most 20 characters long" })
            .min(1, { message: "Username is required" }),
        email: z.string().email({ message: "Invalid email address!" }).min(1, { message: "Email is required" }),
        phone: z
            .string()
            .regex(/^[0-9]{10}$/, { message: "Phone number must be exactly 10 digits" })
            .min(1, { message: "Phone number is required" }),
        qualification: z.enum(["All Jobs", "10th", "12th", "Degree/Graduation", "MS/Post-Graduation", "MBA", "PhD"], {
            message: "Select a valid qualification",
        }),

        interest: z.enum(["All Jobs", "10th", "12th", "Degree/Graduation", "MS/Post-Graduation", "MBA", "PhD"], {
            message: "Select a valid interest",
        }),
        password: z
            .string()
            .min(8, { message: "Password must be at least 8 characters long" })
            .max(32, { message: "Password must be at most 32 characters long" })
            .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
            .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
            .regex(/\d/, { message: "Password must contain at least one number" })
            .regex(/[@$!%*?&#]/, { message: "Password must contain at least one special character" })
            .min(1, { message: "Password is required" }),

        confirmPassword: z.string().min(1, { message: "Confirm password is required" }),
        tc: z.boolean().refine((value) => value === true, {
            message: "You must accept the terms and conditions",
        }),
    })
    .refine(
        (values) => {
            return values.password === values.confirmPassword;
        },
        {
            message: "Passwords must match!",
            path: ["confirmPassword"],
        }
    );

export default signupFormSchema;
