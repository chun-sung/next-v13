
// import { connectDB } from "@/util/database"
import ListItem from "./ListItem"
import Seo from "../components/Seo"

export default async function List() {  
    // const db = (await connectDB).db('forum')
    // let result = await db.collection('post').find().toArray()

    return <div className="text-white">
        <Seo title='게시판 | 애플' />
        <h1 className="text-2xl text-white mt-10 mb-10 text-center">글목록</h1>
        <div>
            {/* <ListItem result={result} /> */}
            <ListItem />
        </div>
    </div>
}
