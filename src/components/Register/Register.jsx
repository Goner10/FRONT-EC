  import React, { useState, useContext } from 'react';
  import { Button, Form, Input, notification } from 'antd';
  import { useNavigate } from 'react-router-dom';
  import { UserContext } from '../../context/UserContext/UserState';
  import './Register.scss'

  const Register = () => {
    const { register } = useContext(UserContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({});

    const onFinish = (values) => {
      register(values)
      .then(() => {
        notification.success({
         message: 'Registro exitoso', 
        });
        navigate('/login');
      })
      .catch((error) => {
        notification.error({
          message: 'Error en el registro',
          description: error.message,
        });
      });
    };

    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    return (
      <div className="register-container">
        <h2>Register</h2>
        <div className="register-form-container">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="Name"
            name="full_name"
            rules={[{ required: true, message: 'Por favor ingresa tu nombre' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: 'Por favor ingresa tu dirección de correo electrónico' },
              { type: 'email', message: 'Por favor ingresa un email válido' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Por favor ingresa tu contraseña' },
              { min: 6, message: 'La contraseña debe tener al menos 6 caracteres' },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            wrapperCol={{ offset: 8, span: 16 }}
          >
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Form>
      </div>
      </div>
    );
  };

  export default Register;
