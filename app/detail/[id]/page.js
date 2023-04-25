import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";        // import 해야 한다.(엔터로 로드 됨)
import Comment from "./Comment";

export default async function Detail(props) {
    const db = (await connectDB).db('forum')
    let result = await db.collection('post').findOne({ _id: new ObjectId(props.params.id)})
    
    return (
        <div className="text-white text-center mt-5">
            <h1 className="bg-red-300 w-48 m-auto mb-5">상세 페이지</h1>
            <h4>{result.title}</h4>
            <p>{result.content}</p>
            <Comment _id={props.params.id} /> 
        </div>
    )
}