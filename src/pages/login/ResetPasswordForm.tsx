import { ArrowLeftOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Form, FormProps, Input } from "antd"
type ResetPasswordFormProps = {
    setIsResetingPassword: (value: boolean) => void;
}
type FieldType = {
    username?: string;
};

const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    console.log('Success:', values);
};
const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const ResetPasswordForm = ({ setIsResetingPassword }: ResetPasswordFormProps) => {

    return (
        <Form
            name="basic"
            // initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >
            <div className="flex flex-col gap-5">
                <div>
                    <button onClick={() => { setIsResetingPassword(false) }}>
                        <ArrowLeftOutlined />
                    </button>
                </div>
                <h1 className="font-semibold text-2xl">Khôi phục mật khẩu</h1>
                <Form.Item
                    name="email"
                    rules={[
                        { required: true, message: 'Vui lòng nhập email của bạn!' },
                        { type: 'email', message: 'Email không hợp lệ!' }
                    ]}
                    style={{ margin: 0 }}
                >
                    <Input type="email" size="large" placeholder="Nhập email" prefix={<UserOutlined className="me-5" />} autoComplete="off" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" size="large" htmlType="submit"  style={{ width: '100%' }}>
                        Gửi
                    </Button>
                </Form.Item>
            </div>
        </Form>
    )

}

export default ResetPasswordForm