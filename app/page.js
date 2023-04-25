import { connectDB } from "@/util/database"
import Seo from "./components/Seo"
import Test from "./components/Test"


export default async function Home() {

const db = (await connectDB).db('forum')
let result = await db.collection('post').find().toArray()

  return (
    <div className="text-white">
      <Seo title="Home | 애플" />
      <h1 className="text-center mt-24 text-4xl">메인 화면 입니다.</h1>
      <div className="with-[300px]  h-full p-10 ">
        <button className=" hover:-translate-x-2 duration-400 shadow-2xl text-black bg-red-400
          border-[1px] m-auto w-36 p-2 rounded block mt-10">
          Save Change
        </button>
        <Test />


      </div>
    </div>
  )
}

