import { useState } from "react"
import { Link } from "react-router-dom"
import LoginForm from "./LoginForm"
import ResetPasswordForm from "./ResetPasswordForm"

const Login = () => {
  const [isResetingPassword, setIsResetingPassword] = useState(false);
  return (
    <div className="min-h-[100vh] bg-blue-200 grid grid-cols-12">
      <div className="col-span-5 py-5">
        <div className="font-bold p-5 text-4xl">
          <Link to="/">
            Estate<span className="text-blue-600">Network</span>
          </Link>
        </div>
        <div className="flex justify-center">
          <img src="https://png.pngtree.com/png-clipart/20220616/original/pngtree-people-working-graphic-design-with-computer-flat-vector-illustration-png-image_8089603.png" width="400px"></img>
        </div>
        <div className="font-semibold p-5">
          Tìm đất Estate<span className="text-blue-600">Network</span> dẫn lối
        </div>
      </div>
      <div className="col-span-7 bg-white rounded-s-lg px-8 py-10 flex flex-col justify-between ">
        {
          !isResetingPassword ? (
            <>
              <LoginForm setIsResetingPassword={setIsResetingPassword} />
              <div className="text-center">
                Chưa là thành viên?&nbsp;
                <Link to="/register" className="text-blue-600 font-semibold">
                  Đăng ký
                </Link>
                &nbsp;tại đây
              </div>
            </>
          ) : (
            <>
              <ResetPasswordForm setIsResetingPassword={setIsResetingPassword} />
              <div className="text-center">
                Bạn đã có tài khoản?&nbsp;
                <button className="text-blue-600 font-semibold" onClick={() => { setIsResetingPassword(false) }}>
                  Đăng nhập
                </button>
                &nbsp;tại đây
              </div>
            </>
          )
        }

      </div>
    </div>
  )
}

export default Login