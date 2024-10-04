import {z} from 'zod'

export  const loginValidation = z.object({
    email: z.string().email({message: 'invalid email address'}),
    password: z.string().min(6,{message:"Password must be at least 6 characters"})
 })