import { Button, Card, Form, Input, Typography, message } from "antd";
import React, { useState } from "react";

const { Title } = Typography;

const Profile = () => {
  const [users, setUsers] = useState([]);
  const [isLogin, setIsLogin] = useState(false);

  const onFinish = ({ email, password, name }) =>{
    if (isLogin) {
      users.find((user) => user.email === email && user.password === password)
        ? message.success(`Welcome back, ${name}!`)
        : message.error("Invalid credentials, please try again.");
    } else {
      if (users.some((user) => user.email === email)) {
        message.error("Email already exists! Please login.");
      } else {
        setUsers([...users, { name, email, password }]);
        message.success("Registration successful!");
      }
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <Card style={{ width: 350, padding: 20, boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <Title level={3} style={{ textAlign: "center" }}>{isLogin ? "Login" : "Register"}</Title>
        <Form layout="vertical" onFinish={onFinish}>
          {!isLogin && (
            <Form.Item name="name" rules={[{ required: true, message: "Please enter your name" }]}>
              <Input placeholder="Full Name" />
            </Form.Item>
          )}
          <Form.Item name="email" rules={[{ required: true, type: "email", message: "Enter valid email" }]}>
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item name="password" rules={[{ required: true, message: "Enter a strong password" }]}>
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block style={{ background: "gold", borderColor: "gold", color: "black" }}>
              {isLogin ? "Login" : "Register"}
            </Button>
          </Form.Item>
        </Form>
        <Button type="link" block onClick={() => setIsLogin(!isLogin)} style={{ color: "gold" }}>
          {isLogin ? "Create an account" : "Already have an account? Login"}
        </Button>
      </Card>
    </div>
  );
};

export default Profile;