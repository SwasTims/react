import { HomeOutlined, MenuOutlined, StarOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <Button
        type="primary"
        onClick={() => setCollapsed(!collapsed)}
        icon={<MenuOutlined />}
        style={{
          margin: '10px',
          width: '40px',
          height: '40px',
          background: 'gold',
          transition: '0.2s ease-in-out',
        }}
      />
      <Sider width={160} collapsible collapsed={collapsed} trigger={null} style={{ background: 'pink' }}>
        <Menu theme="dark" mode="inline" onClick={({ key }) => navigate(key)}>
          <Menu.Item key="/" icon={<HomeOutlined />}>Home</Menu.Item>
          <Menu.Item key="/movieDetails" icon={<VideoCameraOutlined />}>Movies</Menu.Item>
          <Menu.Item key="/watchlist" icon={<StarOutlined />}>Watchlist</Menu.Item>
          <Menu.Item key="/profile" icon={<UserOutlined />}>Profile</Menu.Item>
        </Menu>
      </Sider>
    </>
  );
};

export default Sidebar;