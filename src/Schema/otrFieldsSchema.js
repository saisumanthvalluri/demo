import { z } from "zod";

export const otrFormSchema = z
    .object({
        // Aadhar Number
        AadharNumber: z
            .string()
            .min(12, { message: "Aadhar Number must be 12 digits long" })
            .max(12, { message: "Aadhar Number must be 12 digits long" })
            .regex(/^\d{12}$/, "Aadhar Number must be a valid 12-digit number"),

        // Confirm Aadhar Number
        confAadharNum: z.string().min(1, { message: "Confirm Aadhar Number requried!" }),
        // .max(12, { message: "Confirm Aadhar Number must be 12 digits long" })
        // .regex(/^\d{12}$/, "Confirm Aadhar Number must be a valid 12-digit number"),
        // .refine((val, ctx) => val === ctx.parent.Aadhar_number, {
        //     message: "Aadhar Numbers do not match",
        // }),

        // confirm_aadhar_number: z
        //     .string()
        //     .min(12, { message: "Confirm Aadhar Number must be at least 12 characters long" })
        //     .regex(/^\d+$/, "Confirm Aadhar Number must contain only digits")
        //     .refine((val, ctx) => val === ctx.parent["Aadhar_number"], {
        //         message: "Aadhar Numbers do not match",
        //     }),

        // Type of Identification Card
        id_card_type: z.enum(["Passport", "Driving License", "Voter ID"], {
            required_error: "Please select the type of Identification card",
        }),

        // Identification Card Number
        id_card_number: z
            .string()
            .min(12, { message: "Identification card Number must be at least 12 characters long" })
            .max(20, { message: "Identification card Number cannot exceed 20 characters" }),

        // Candidate’s Name
        candidate_name: z.string().min(1, { message: "Candidate’s Name is required" }),

        // Name Change (with conditional subfields)
        name_change: z
            .enum(["Yes", "No"], {
                message: "Please select if you have ever changed your name",
            })
            // .refine((val) => val === "No" || val === "Yes", {
            //     message: "Please select a valid option",
            // })
            .transform((val) => val === "Yes")
            .pipe(
                z
                    .object({
                        new_name: z.string().min(1, { message: "New Name/Changed Name is required" }),
                        confirm_new_name: z
                            .string()
                            .min(1, { message: "Confirm New Name/Changed Name is required" })
                            .refine((val, ctx) => val === ctx.parent.new_name, {
                                message: "New Names do not match",
                            }),
                    })
                    .optional()
            ),

        // Gender
        gender: z.enum(["Male", "Female", "Other"], {
            required_error: "Please select your gender",
        }),

        // Date of Birth
        dob: z.string().refine(
            (val) => {
                const date = new Date(val);
                return !isNaN(date.getTime());
            },
            {
                message: "Please enter a valid Date of Birth",
            }
        ),

        // Father’s Name
        father_name: z.string().min(1, { message: "Father’s Name is required" }),

        // Mother’s Name
        mother_name: z.string().min(1, { message: "Mother’s Name is required" }),

        // Phone Number
        phone: z
            .string()
            .regex(/^\d{10}$/, "Phone Number must be a valid 10-digit number")
            .min(10, { message: "Phone Number must be 10 digits long" })
            .max(10, { message: "Phone Number must be 10 digits long" }),

        // OTP via Phone
        OTP_phone: z
            .string()
            .regex(/^\d{6}$/, "OTP must be a 6-digit number")
            .min(6, { message: "OTP must be 6 digits long" })
            .max(6, { message: "OTP must be 6 digits long" })
            .optional(),

        // Email Address
        email: z.string().email({ message: "Please enter a valid email address" }),

        // OTP via Email
        // otp_email: z
        //     .string()
        //     .regex(/^\d{6}$/, "OTP must be a 6-digit number")
        //     .min(6, { message: "OTP must be 6 digits long" })
        //     .max(6, { message: "OTP must be 6 digits long" }),
    })
    .refine(
        (values) => {
            return values.AadharNumber === values.confAadharNum;
        },
        {
            message: "Aadhar number did not match",
            path: ["confAadharNum"],
        }
    )
    .refine(
        (values) => {
            return values.AadharNumber === values.confAadharNum;
        },
        {
            message: "Aadhar number did not match",
            path: ["confAadharNum"],
        }
    );
