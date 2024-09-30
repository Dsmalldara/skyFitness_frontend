
import axios from 'axios';
import CryptoJS from 'crypto-js'
const baseUrl = "http://localhost:4000"
const MaskKey = "ValidMaskKey"
import Cookies from 'js-cookie';
const encryptToken = (token:string)=>{
   return CryptoJS.AES.encrypt(token,MaskKey).toString()
}
const decryptToken = (token:string)=>{
    const value = CryptoJS.AES.decrypt(token,MaskKey)
     return value.toString(CryptoJS.enc.Utf8)
}
const setToken = (token:string)=>{
    const encryptedToken = encryptToken(token);
    Cookies.set('token', encryptedToken,{
        expires: 1 * 60 * 60 ,
        secure:true,
        sameSite: 'strict'
    })    
}
const getToken = ()=>{
   const value =  Cookies.get('token')
   if(value){
    return decryptToken(value)
   }
}
const clearToken = ()=>{
    Cookies.remove('token');
}
export const ApiCLient = axios.create({
	baseURL: baseUrl,
    headers:{
        'Content-Type': 'application/json'
    }
})
ApiCLient.interceptors.request.use((config) => {
    const token = getToken()
    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
},
 (error)=>{
    return Promise.reject(error);
 }
);

ApiCLient.interceptors.response.use((config)=>
config,
(error)=>{
    if(error.response && error.response.status === 401){
        clearToken()
       
    }
    return Promise.reject(error);
}
)