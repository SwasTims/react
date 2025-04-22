import { Button, Form, Input, Typography, message } from 'antd';
import React from 'react';

const { Title } = Typography;

const Profile = () => {
  const onFinish = (values) => {
    console.log('Success:', values);
    message.success('User Added!');
  };

  return (
    <div>
      <Title>Profile</Title>
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item label="Full Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
          <Input />
        </Form.Item>
        <Form.Item label="Email" name="email" rules={[{ required: true, type: 'email', message: 'Enter valid email' }]}>
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">Add</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Profile;
