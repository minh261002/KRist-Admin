import { Button, Card, Checkbox, Form, Input, Typography } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const { Title, Paragraph } = Typography;

const LoginScreen = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [remember, setRemember] = useState<boolean>(false);

  const [form] = Form.useForm();

  const handleLogin = (values: { email: string; password: string }) => {
    console.log(values);
  };

  return (
    <div className="w-75">
      <Card bordered={false} className="shadow-none">
        <div className="text-center">
          <img src="/favicon.svg" alt="" width="70" className=" mb-4" />
          <Title level={2}>Login to your account</Title>
          <Paragraph>
            Welcome back! Please login to your account to continue
          </Paragraph>
        </div>

        <Form
          layout="vertical"
          form={form}
          onFinish={handleLogin}
          disabled={loading}
          size="large"
        >
          <Form.Item
            name={"email"}
            label={"Email"}
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
              {
                type: "email",
                message: "Email is not valid!",
              },
            ]}
          >
            <Input placeholder="Email" type="email" allowClear />
          </Form.Item>

          <Form.Item
            name={"password"}
            label={"Password"}
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password placeholder="Password" allowClear />
          </Form.Item>
        </Form>

        <div className="row">
          <div className="col">
            <Checkbox
              value={remember}
              onChange={(e) => setRemember(e.target.checked)}
            >
              Remember me
            </Checkbox>
          </div>
          <div className="col text-end">
            <Link to="/forgot-password" className="text-primary">
              Forgot password?
            </Link>
          </div>
        </div>

        <div className="mb-3 mt-4">
          <Button
            type="primary"
            className="w-100 py-3 bg-dark"
            htmlType="submit"
            loading={loading}
            onClick={() => form.submit()}
            style={{
              width: "100%",
            }}
            size="large"
          >
            Login
          </Button>
        </div>

        <div className="mb-3">
          <Button
            loading={loading}
            style={{
              width: "100%",
            }}
            size="large"
            icon={
              <img width={24} height={24} src="/google.png" alt="google-logo" />
            }
          >
            Login with Google
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default LoginScreen;
