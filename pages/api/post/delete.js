import { connectDB } from "@/util/database"
import { ObjectId } from "mongodb";

export default async function handler(req, res) {
    
    if(req.method == 'DELETE') {        
        try {
            const db = (await connectDB).db('forum')        
            let result = await db.collection('post').deleteOne({_id: new ObjectId(req.body)})
            console.log(result)                    //{ acknowledged: true, deletedCount: 1 }
            
            res.status(200).json({msg:'삭제완료'})

        } catch {
            console.log('삭제중 에러 발생')
        }
    }    
}