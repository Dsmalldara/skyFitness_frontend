'use client'
import { QueryClient, useMutation } from "@tanstack/react-query"
import { useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { ApiCLient } from "./axiosClient"
import { error } from "console"
import { AxiosError } from "axios"
const useRegister = ()=>{
    const router = useRouter()
    const queryClient = useQueryClient()
    return useMutation<any, any, any>({
        mutationFn:async(value:any)=>{
            console.log(typeof value)
            const response = await ApiCLient.post<any>('api/auth/register', value)
            queryClient.setQueryData(['user'], response.data)
            console.log(response.data)
            return response.data
        },
        onSuccess:()=>{
          router.push('/')
        },
        onError:(error:any)=>{
            console.log(error)
            throw new Error(error)
        }
    })
}

const useLogin =()=>{
    const queryClient = useQueryClient()
    return useMutation<any,any,any>({
        mutationFn: async(value:any)=>{
            const response = await  ApiCLient.post<any>('api/auth/login', value)
            queryClient.setQueryData(['user-login'], response)
            return response.data
        },
        onError:(error:AxiosError)=>{
            throw new Error(error.message)
        },
        onSettled:()=>{
            console.log('login successful')
        }
    })
}

export {useRegister, useLogin}