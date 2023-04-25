import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    // console.log(req.body)
    req.body = JSON.parse(req.body);             // JSON문자열을 객체로 변환

    if(req.method == 'POST') {

        let session = await getServerSession(req, res, authOptions)   // 사용자 정보 서버에서 가져오기
        // console.log('세션',session)
        
        if(session == null) {            
            res.status(200).json({msg: 'loginFail'})
            return;
        }        

        let commentData = {
            content: req.body.comment,
            parent: ObjectId(req.body._id),
            author: session?.user.email                    // 사용자 정보는 위조할 수 있기 때문에 서버에서 같다쓰는게 좋을 듯
        }

        const db = (await connectDB).db('forum')
        let result = await db.collection('comment').insertOne(commentData)  // 데이터 추가

        // 업데이트 된 댓글 데이터 재전송
        let data = await db.collection('comment').find({parent: ObjectId(req.body._id) }).toArray() 
        res.status(200).json(data)
    }
}