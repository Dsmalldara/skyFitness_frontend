'use client'
import { useMutation } from "@tanstack/react-query"
import { useQueryClient } from "@tanstack/react-query"
import { useRouter } from "next/navigation"
import { ApiCLient } from "./axiosClient"
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



export {useRegister}