import { connectDB } from "@/util/database"
// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
    req.body = JSON.parse(req.body)
    
    if(req.method == 'POST') {        
        
        // let session = await getServerSession(req, res, authOptions)
        // console.log(session.user.email)

        // if(session) {
        //     req.body.author = session.user.email
        // }

        if(req.body.title == '') {
            return res.status(500).json('너 제목 왜안씀')
        } 

        try {
            const db = (await connectDB).db('forum')        
            let result = await db.collection('post').insertOne(req.body);
            return res.status(302).json('저장완료')           
        } catch {
            console.log('서버에러')
        }        
    }
    
}