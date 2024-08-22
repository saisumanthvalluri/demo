import { z } from "zod";

const forgotPasswordFormSchema = z.object({
    email: z.string().email({ message: "Invalid email address!" }),
});

export default forgotPasswordFormSchema;
