'use client'
import { signOut } from 'next-auth/react'

export default function LogOutBtn() {
    return  <button className="w-24 inline-block text-center hover:bg-red-400 p-2 m-x-2 rounded-xl mr-2" onClick={()=>{
      alert('logout 되었습니다.')
      signOut();
      }}>Logout</button>
}