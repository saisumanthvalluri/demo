import { z } from "zod";

const applyThroughOTRSchema = z.object({
    admitCardDelivery: z.enum(["Yes", "No"], { message: "Please select an option" }),
    appType: z.enum(["general", "tattkal"], {
        message: "Select a valid Application Type",
    }),
    prefExmCenter: z.enum(["Anakapalli", "Anantapur", "Annamaiah", "Bapatla", "Chittoor", "East Godavari"], {
        message: "Select a valid Exam Center",
    }),
    hereBy: z.boolean().refine((value) => value === true, {
        message: "You must accept the terms and conditions",
    }),
    // profilePicture: z
    //     .any()
    //     .refine((file) => file instanceof File && file.size > 0, { message: "Profile picture is required" })
    //     .refine(
    //         (file) => file instanceof File && file.size <= 2 * 1024 * 1024, // 2MB limit
    //         { message: "Profile picture must be less than 2MB" }
    //     )
    //     .refine((file) => file instanceof File && ["image/jpeg", "image/png"].includes(file.type), {
    //         message: "Profile picture must be a JPEG or PNG image",
    //     }),
});

export default applyThroughOTRSchema;
