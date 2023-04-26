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
        <button className=" hover:-translate-x-2 duration-100 hover:bg-yellow-300 shadow-2xl text-black bg-red-400
          border-[1px] m-auto w-36 p-2 rounded block mt-10">
          Save
        </button>
        <button className="transition  delay-500 hover:translate-x-1 duration-500 hover:bg-blue-300 shadow-2xl text-black bg-red-400
          border-[1px] m-auto w-36 p-2 rounded block mt-10">
          OK
        </button>
        <button className=" hover:scale-105 duration-100 hover:bg-blue-500 hover:text-white shadow-2xl text-black bg-red-400
          border-[1px] m-auto w-36 p-2 rounded block mt-10">
          Change
        </button>
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
        <Test />


      </div>
    </div>
  )
}

