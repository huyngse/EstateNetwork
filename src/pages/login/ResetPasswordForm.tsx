import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Input } from "antd"
type ResetPasswordFormProps = {
    setIsResetingPassword: (value: boolean) => void;
}

const ResetPasswordForm = ({ setIsResetingPassword }: ResetPasswordFormProps) => {
    return (
        <div className="flex flex-col gap-5">
            <div>
                <button onClick={() => { setIsResetingPassword(false) }}>
                    <ArrowLeftOutlined />
                </button>
            </div>
            <h1 className="font-semibold text-2xl">Khôi phục mật khẩu</h1>
            <Input type="email" size="large" placeholder="Nhập email" prefix={<UserOutlined className="me-5" />} autoComplete="off" />
            <Button type="primary" size="large">
                Gửi
            </Button>
        </div>
    )
}

export default ResetPasswordForm