'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"

export default function  RegisterBtn() {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    let router = useRouter();

    return <>
            <div className="bg-red-300 text-center pt-10 pb-10 text-black">
                <input className="mb-2 p-2 outline-blue-400 " name="name" type="text" placeholder="이름" onChange={(e)=> setName(e.target.value) } required/><br/> 
                <input className="mb-2 p-2 outline-blue-400 " name="email" type="text" placeholder="이메일" onChange={(e)=> setEmail(e.target.value)} required/><br/>
                <input className="mb-2 p-2 outline-blue-400 " name="password" type="password" placeholder="비번" onChange={(e)=> setPassword(e.target.value)  } required/><br/>
                <button className="p-2 bg-blue-300 hover:bg-blue-600 rounded" type="submit" onClick={()=> {
                    fetch('/api/auth/signup', {
                        method: 'POST',
                        body: JSON.stringify({name, email, password})
                    })
                    .then((res) => {
                        return res.json()
                    })
                    .then((res) => {
                        console.log(res)   // 가입 성공
                        alert('회원가입이 완료 되었습니다.')                        
                        router.push('/')
                    })
                    .catch((err) =>{ 
                        console.log(err)
                    })

                }}>가입요청</button>
            </div>
    </>
}