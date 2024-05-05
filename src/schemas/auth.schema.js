import { z } from "zod";

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username is required'
    }),
    email: z.string({
        required_error: 'Email is required'
    }).email({
        message: 'Invalid email'
    }),
    password: z.string({
        required_error: 'Password is required'
    }).min(6, {
        message: "Password is required"
    })
});

export const loginSchema = z.object({
    email: z.string({
        required_error: "Email is requiered",
    }).email({
        message: "invalid email",
    }),
    password: z.string({
        required_error: "Password is required",
    }).min(6, {
        message: "Password must de at least 6 characters",
    })
})