const { z } = require('zod')

const signupSchema = z.object({
    fullname: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be atleast of 3 characters" })
        .max(30, { message: "Name must not be more than 30 characters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be atleast of 3 characters" })
        .max(50, { message: "Email must not be more than 50 charaters" }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(3, { message: "Password must be atleast of 3 characters" })
        .max(50, { message: "Password must not be more than 50 characters" })
})

const loginSchema = z.object({
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be atleast of 3 characters" })
        .max(50, { message: "Email must not be more than 50 charaters" }),
    password: z
        .string({ required_error: "Password is required" })
        .trim()
        .min(3, { message: "Password must be atleast of 3 characters" })
        .max(50, { message: "Password must not be more than 50 characters" })
})

module.exports = { signupSchema, loginSchema }