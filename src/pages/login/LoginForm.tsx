import { login } from '@/lib/api/authen-api';
import { LockFilled, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import { FormProps } from "antd";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

type FieldType = {
    email?: string;
    password?: string;
    // remember?: string;
};


type LoginFormProps = {
    setIsResetingPassword: (value: boolean) => void;
}

const LoginForm = ({ setIsResetingPassword }: LoginFormProps) => {
    const navigate = useNavigate();
    const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
        console.log(values);
        if (values.email != null && values.password != null) {
            const { data } = await login(values.email, values.password);
            if (data.success) {
                toast.success("Đăng nhập thành công!");
                setTimeout(
                    () => {
                        navigate("/");
                    }, 1000
                );
            } else {
                toast.error("Đăng nhập thất bại! Sai email hoặc mật khẩu",);
            }
        }
    };
    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            name="basic"
            // initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <div className="flex flex-col gap-5">
                <h1 className="font-semibold text-4xl mt-10">Đăng nhập</h1>
                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: 'Vui lòng nhập email của bạn!' },
                        { type: 'email', message: 'Email không hợp lệ!' }
                    ]}
                    style={{ margin: 0 }}
                >
                    <Input type="email" size="large" placeholder="Email" prefix={<UserOutlined className="me-5" />} autoComplete="off" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[{ required: true, message: 'Vui lòng nhập mật khẩu!' }]}
                    style={{ margin: 0 }}
                >
                    <Input.Password type="password" size="large" placeholder="Mật khẩu" prefix={<LockFilled className="me-5" />} autoComplete="new-password" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" size="large" htmlType='submit' style={{ width: '100%' }}>
                        Đăng nhập
                    </Button>
                </Form.Item>
                <div className="flex justify-between">
                    <div></div>
                    <button className="text-blue-600" onClick={() => { setIsResetingPassword(true) }}>
                        Quên mật khẩu?
                    </button>
                </div>
            </div>
        </Form>
    )
}

export default LoginForm