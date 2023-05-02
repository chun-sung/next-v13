'use client'

import Link from "next/link"
import DetailLink from "./DetailLink"
import { useRouter } from "next/navigation"
import Seo from "../components/Seo"
import { useEffect, useState } from "react"
import { useMutation, useQuery } from "@tanstack/react-query"



export default function ListItem() {

    // const [article, setArticle] = useState([]);

    // fetch 방식 

    // useEffect(()=> {
    //     fetch('/api/list')
    //     .then((res) => res.json())
    //     .then((data) => setArticle(data))
    //     .catch((err) => console.log(err))
    // },[])

    // console.log(article)
 
    // useQuery 방식

    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: () => fetch('/api/list').then( res => res.json()).then( res =>  res )        
    })

    // useQuery 데이터 로딩중
    if(isLoading) return <div className="text-center p-2 bg-red-300 w-36 rounded-lg m-auto">Loading...</div>

    // useQuery 에러처리
    if(error) return <pre>{JSON.stringify(error)}</pre>

    // const DelPostMutation = useMutation({
    //     mutationFn: (obj) => fetch('/api/post/delete', obj)
    // })
  

    return (
        <div>
            {
                data.map((item, i) =>                  
                    <div className="start border-2 rounded-lg shadow-md shadow-zinc-500 p-3 pl-3 w-[500px] m-auto mb-3" key={i}>
                            {/*  id가 객체로 나오면 문자로 변환해 주어야 한다. item._id.toString()   */}
                        <Link href={`/detail/${item._id}`}><h4 className="mb-3 hover:bg-red-400 rounded-lg p-1">{item.title}</h4></Link>
                        <p>{item.content}</p>

                        {/* <DetailLink id={item._id} /> */}
                        <Link className="bg-red-400 rounded px-9 hover:bg-red-800 mr-2"  href={`/edit/${item._id}`}>수정</Link>
                        <span className="bg-red-400 rounded px-9 hover:bg-red-800 cursor-pointer" onClick={(e)=> {
                            
                            let choice = confirm('삭제하시겠습니까?')

                            // DelPostMutation.mutate({ method: 'DELETE', body: item._id })

                            if(choice) {
                                fetch('/api/post/delete',{ method: 'DELETE', body: item._id })
                                .then((res) => {
                                    if(res.status == 200) {
                                        return res.json()
                                    } else {
                                        // 서버가 에러코드 전송시 실행할 코드 
                                        console.log(res)
                                    }                                  
                                })
                                .then(() => refetch())                               
                                // .then((res) => {                                    
                                //     // alert('삭제 성공')   
                                //     e.target.parentElement.style.opacity = 0;
                                    
                                //     setTimeout(() => {
                                //             e.target.parentElement.style.display = 'none'
                                //         },700)                                        
                                // }).catch((error) => {
                                //     console.log(error)
                                // })
                            }
                        }}>삭제</span> <br />
                        {/* <DetailLink id={item._id}  /> */}
                    </div>                   
                )                
            }
        </div>
    )
}