import Seo from "../components/Seo";
import RegisterBtn from "./RegisterBtn";

export default function Register() {
    return (
      <div className="w-[600px] m-auto h-96 text-white">
        <Seo title="글작성 | 애플" />
        <h4 className="mt-5 text-2xl text-center mb-5">회원 가입</h4>
        <RegisterBtn />
      </div>
    )
  }