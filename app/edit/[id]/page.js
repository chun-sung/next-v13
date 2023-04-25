import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";        // import 해야 한다.(엔터로 로드 됨)

export default async function Edit(props) {
    const db = (await connectDB).db('forum')
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id)})

    return (
        <div className="text-center text-black pt-5">
            <h1 className="text-2xl mb-5 text-white">글 수정</h1>
            <form  action="/api/post/edit" method="POST">
                <input className="hidden p-2 m-auto w-56 mb-2 border-[1px] border-grey outline-red-300" 
                    defaultValue={result._id.toString()}   name="_id"/>
                <input className="p-2 m-auto w-56 block mb-2 border-[1px] border-grey outline-red-300" 
                    defaultValue={result.title}   name="title"/>
                <input className="p-2 m-auto w-56 block mb-5 border-[1px] border-grey outline-red-300" 
                    defaultValue={result.content} name="content"/>
                <button className="block w-20 p-1 h-8 rounded m-auto bg-red-500 hover:bg-red-700" type="submit">전송</button>
            </form>
        </div>
    )
}