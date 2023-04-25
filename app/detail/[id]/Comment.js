'use client'

import Seo from "@/app/components/Seo";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Comment({_id}) {

    let [comment, setComment] = useState('');
    // let [comentData, setcomentData] = useState([])

    let router = useRouter();


    // fetch 방식
    // useEffect(()=> {
    //     fetch('/api/comment/list?id='+ _id).then( res => res.json())
    //     .then((data) =>{
    //         // console.log(data)
    //         setcomentData(data)
    //     })   
    // },[])

    // useQuery 방식
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['comment'],
        queryFn: () => fetch(`/api/comment/list?id=${_id}`).then( res => res.json()).then( res =>  res )        
    })

    // useQuery 데이터 로딩중
    if(isLoading) return <div className="text-center p-2 bg-red-300 w-36 rounded-lg m-auto">Loading...</div>

    // useQuery 에러처리
    if(error) return <h1>{JSON.stringify(error)}</h1>
    
    return (
        <div>            
            <Seo title="Comment | 애플" />
            <hr className="mt-10" />
            {/* 댓글 출력하기 */}            
            <div className="mt-10 mb-5">다른 사용자의 댓글</div>
            {   
                data.map((coment, i) => 
                    <div key={i}>
                        <div className=" w-[800px] m-auto">                        
                            <p className="text-sm bg-blue-500 rounded-lg p-1 m-auto inline-block mr-2">({i+1}){coment.content}</p>
                            <button className="bg-amber-500 rounded px-2 mr-2 mt-2">수정</button>
                            <button className="bg-red-500 rounded px-2">삭제</button>
                            <p className="text-[10px] ml-[130px] mb-5">{coment.author}</p>
                        </div>
                    </div>                   
                )                
            }

            {/* 댓글 보내기 */}
            <input className="inputComment mr-2 mt-10 text-black" onChange={(e) => {setComment(e.target.value)}} required/>
            <button className="bg-red-300 hover:bg-red-500 rounded hover:outline-red-300 px-2" onClick={()=> {

                if(comment.length == '') {
                    alert('내용을 입력해 주세요')
                    let a = document.querySelector('.inputComment')   
                    a.focus()          // input 포커스
                    return
                }
                // console.log(comment)
                fetch('/api/comment/new', { 
                    method: 'POST',
                    body: JSON.stringify({ comment: comment, _id: _id})   // JSON 문자열로 변환  
                }) 
                .then( res => {
                    return res.json()        // res.json()  꼭 return  해주어야 함
                })      
                .then(res => {
                    if(res.msg  == 'loginFail2') {
                        alert('로그인후 댓글 등록이 가능합니다.')
                        return
                    } 
                })
                .then(res => {
          
                    refetch() 
                    let a = document.querySelector('.inputComment')   
                    setComment('')
                    a.value = ''       // input 텍스트 초기화
                    a.focus()          // input 포커스
                })
                .catch(err =>console.log(err))

                 
                // .then( res => res.json() )
                // .then( data => setcomentData(data))

            }}>댓글 달기</button>
        </div>
    )
}