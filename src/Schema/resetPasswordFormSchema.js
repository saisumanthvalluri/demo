import { z } from "zod";

const resetPasswordFormSchema = z
    .object({
        email: z.string().email({ message: "Invalid email address!" }),
        newpassword: z
            .string()
            .min(8, { message: "Password must be at least 8 characters long" })
            .max(32, { message: "Password must be at most 32 characters long" })
            .regex(/[A-Z]/, { message: "Password must contain at least one uppercase letter" })
            .regex(/[a-z]/, { message: "Password must contain at least one lowercase letter" })
            .regex(/\d/, { message: "Password must contain at least one number" })
            .regex(/[@$!%*?&#]/, { message: "Password must contain at least one special character" })
            .min(1, { message: "Password is required" }),

            confnewpassword: z.string().min(1, { message: "Confirm password is required" }),
    })
    .refine(
        (values) => {
            return values.newpassword === values.confnewpassword;
        },
        {
            message: "Passwords must match!",
            path: ["confnewpassword"],
        }
    );

export default resetPasswordFormSchema;
