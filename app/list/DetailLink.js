'use client'

import { useRouter } from "next/navigation";

export default function DetailLink({id}) {
    
    let router = useRouter();

    return (        
        <button className="bg-red-300 inline-block rounded px-2 mt-2 hover:bg-red-500 mr-2" onClick={()=>{
            router.push(`/detail/${id}`)
        }}>router move</button>    
    )
}