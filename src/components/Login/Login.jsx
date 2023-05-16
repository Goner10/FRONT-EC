
import React, { useContext, useEffect } from 'react'
import { Button, Form, Input, notification } from "antd";
import { UserContext } from '../../context/UserContext/UserState';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import './Login.scss'




const Login = () => {
  const { login, message, token } = useContext(UserContext);
  const navigate = useNavigate();
  const onFinish = (values) => {
    login(values)
  };
  
  useEffect(() => {
    if (token) {
      navigate("/");
    }
    if (message) {
      notification.success({
        message: message,
      });
    }
  }, [token]);
 
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-container">
       <h2>Login</h2>
       <div className="login-form-container">
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        style={{
          maxWidth: 600,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="email"
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your password!",
            },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Enter
          </Button>
        </Form.Item>
      </Form>
      <div>
        <p>
        You don't have an account?{' '}
          <Link to="/register">Sign up</Link> {/* Enlace para registrarse */}
        </p>
      </div>
    </div>
    </div>
  
  )
}

export default Login