import { LockFilled, UserOutlined } from '@ant-design/icons'
import { Button, Form, Input } from 'antd'
import { FormProps } from "antd";

type FieldType = {
    username?: string;
    password?: string;
    // remember?: string;
};
const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};
const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

type LoginFormProps = {
    setIsResetingPassword: (value: boolean) => void;
}

const LoginForm = ({ setIsResetingPassword }: LoginFormProps) => {
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
                        {type: 'email', message: 'Email không hợp lệ!'}
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