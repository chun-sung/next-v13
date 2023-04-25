import PostCreateBtn from "./PostCreateBtn";
import Seo from "../components/Seo";

// export default function Write() {
//     return (
//         <div className=" m-5 p-5">
//             <Seo title="글작성 | 애플" />
//             <h4 className="mt-3 text-center text-white mb-5 text-2xl">글작성</h4>
//             <form  action="/api/post/new" method="POST">
//                 <input className="p-2 m-auto w-56 block mb-2 border-[1px] border-grey outline-red-300" name="title"  placeholder="글제목"/>
//                 <input className="p-2 m-auto w-56 block mb-5 border-[1px] border-grey outline-red-300" name="content" placeholder="글내용"/>
//                 <button className="block w-20 p-1 h-8 rounded m-auto bg-red-500 hover:bg-red-700" type="submit">전송</button>
//             </form>
//         </div>
//     )
// }
export default function Write() {
    return (
        <div className=" m-5 p-5">
            <Seo title="글작성 | 애플" />
            <h4 className="mt-3 text-center text-white mb-5 text-2xl">글작성</h4>
            <PostCreateBtn />                     
        </div>
    )
}