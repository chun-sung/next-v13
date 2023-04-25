import Link from "next/link";
import LoginBtn from "./LoginBtn";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import LogOutBtn from "./LogiOutBtn";


export default async function Nav() {
    let session = await getServerSession(authOptions)    // getServerSession 및 authOptions 엔터 import
    // console.log(session);

    return (
        <>
        <Link href='/'><h1 className='text-center text-3xl mt-3 mb-3 text-white'><b>애플후레시</b></h1></Link>

        <nav className="bg-white text-black p-3 pl-36">          
          <Link className="w-24 inline-block text-center hover:bg-red-400 p-2 m-x-2 rounded-xl mr-2" href='/list'>글목록</Link>
          <Link className="w-24 inline-block text-center hover:bg-red-400 p-2 m-x-2 rounded-xl mr-2" href='/write'>글작성</Link>    
          {session?.user.name == undefined
           ? <Link className="w-24 inline-block text-center hover:bg-red-400 p-2 m-x-2 rounded-xl mr-2" href='/register'>회원가입</Link>
           : null
          }
          {!session?.user.name == '' 
           ? <div className="inline-block relative">
              {/* <img className="user w-10 h-10 mr-5 rounded-full inline-block" src={session.user.image}/> */}
              <span className="user text-center pt-1 px-4 h-8 mr-4 ml-40 bg-green-500 rounded-lg inline-block" >{session.user.name}</span>
              <LogOutBtn />
              </div>
           :  <LoginBtn />
          }
        </nav>        

        </>
    )
}