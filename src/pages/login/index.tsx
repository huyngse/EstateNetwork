import { useState } from "react"
import { Link } from "react-router-dom"
import LoginForm from "./LoginForm"
import ResetPasswordForm from "./ResetPasswordForm"


const Login = () => {
  const [isResetingPassword, setIsResetingPassword] = useState(false);
  return (
    <div className="px-8 py-10">
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
  );
}

export default Login