import { LockFilled, UserOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
type LoginFormProps = {
    setIsResetingPassword: (value: boolean) => void;
}

const LoginForm = ({ setIsResetingPassword }: LoginFormProps) => {
    return (
        <div className="flex flex-col gap-5">
            <h1 className="font-semibold text-4xl mt-10">Đăng nhập</h1>
            <Input type="email" size="large" placeholder="Email" prefix={<UserOutlined className="me-5" />} autoComplete="off" />
            <Input.Password type="password" size="large" placeholder="Mật khẩu" prefix={<LockFilled className="me-5" />} autoComplete="new-password" />
            <Button type="primary" size="large">
                Đăng nhập
            </Button>
            <div className="flex justify-between">
                <div></div>
                <button className="text-blue-600" onClick={() => { setIsResetingPassword(true) }}>
                    Quên mật khẩu?
                </button>
            </div>
        </div>
    )
}

export default LoginForm