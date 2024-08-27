import { z } from "zod";

export const passwordSchema = z.string().min(8, { message: "Password field must contain at least 8 characters" });

export const nameSpaceSchema = z
    .string()
    .min(1, { message: "This field should not be empty" })
    .max(5, { message: "This fdksn" })
    .regex(/^[a-zA-Z]+(?:\s[a-zA-Z]+)*$/, "Special characters are not allowed");

export const email = z
    .string()
    .min(1, { message: "Email cannot be empty" })
    .email({ message: "Invalid email address!" });
export const phoneSchema = z
    .string()
    .length(10, { message: "Enter a valid phone number" })
    .regex(/^\d{10}$/, "Enter a valid phone number");
export const productIdSchema = z
    .string()
    .min(1, { message: "ProductId must be at least 1 digit" })
    .max(5, { message: "Only integers with 1 to 5 digits are allowed" })
    .regex(/^\d{1,5}$/, "Only integers with 1 to 5 digits are allowed");
export const emailSchema = z.string().email({ message: "Enter a valid Email" });
export const noSpecCharSchema = z
    .string()
    .min(1, { message: "This field should not be empty" })
    .max(50)
    .regex(/^[a-zA-Z0-9]+$/, "Special characters are not allowed");
export const URLSchema = z.string().url({ message: "Enter a valid URL" });
