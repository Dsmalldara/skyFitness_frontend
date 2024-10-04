import {z} from 'zod'

export  const RegisterValidation = z.object({
    firstName: z.string().min(3,{message:"First Name must be available"}),
    lastName:z.string().min(3,{message:"Last Name must be avaiable"}),
    email: z.string().email({message:"Invalid Email"}),
    password: z.string().min(5,{message:"Password must be at least 5 characters long"}),
 });