import { MongoClient } from 'mongodb'
const url = `mongodb+srv://${process.env.DB_ID}:${process.env.DB_PW}@cluster0.iz36b.mongodb.net/?retryWrites=true&w=majority`
const options = { useNewUrlParser: true }

let connectDB

if (process.env.NODE_ENV === 'development') {  // 개발 서버 실행시 재시작 되지 않게 조치 됨
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }