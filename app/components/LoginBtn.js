'use client'
import { signIn } from 'next-auth/react'

export default function LoginBtn() {
    return  <button className="bg-red-300 text-sm w-34 inline-block text-center hover:bg-red-400 p-2 m-x-2 rounded-xl mr-2" onClick={()=>{
        signIn()
      }}>Login</button>
}