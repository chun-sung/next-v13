'use client'

import { useRouter } from "next/navigation";
import { useState } from "react"



export default function PostCreateBtn() {
    const [title, setTitle] = useState();
    const [content, setContent] = useState();

    const router = useRouter();


    return <>
        <input className="p-2 m-auto w-56 block mb-2 border-[1px] border-grey outline-red-300" placeholder="글제목" onChange={(e)=>{
            setTitle(e.target.value)
        }}/>
        <input className="p-2 m-auto w-56 block mb-5 border-[1px] border-grey outline-red-300" placeholder="글내용" onChange={(e)=>{
            setContent(e.target.value)
        }}/>
        <button className="block w-20 p-1 h-8 rounded m-auto bg-red-500 hover:bg-red-700" onClick={()=>{
            fetch('/api/post/new' ,{
                method: 'POST',
                body: JSON.stringify({title, content}),
            })
            .then((res)=> {
                return res.json();
            })
            .then((res)=> {       
                // res 에 data 담겨 있다.                         
                router.push('/list')
            })
            .catch((err)=>{
                console.log(err)
            })
        }}>전송</button>
    </>    
}