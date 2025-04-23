import { Layout } from 'antd';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './component/sidebar';
import Home from './pages/home';
import MovieDetails from './pages/movieDetails';
import Profile from './pages/profile';
import Watchlist from './pages/watchlist';

const { Sider, Content } = Layout;

const Maroon = () => {
  const [collapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} trigger={null}>
        <Sidebar />
      </Sider>
      <Layout>
        <h1 style={{ margin: '16px', textAlign: 'center', padding: '5px', color: 'gold'}}>MaroonFlix</h1>
        <Content style={{ margin: '16px', textAlign: 'center', padding: '20px', background: 'beige' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movieDetails" element={<MovieDetails />} />
            <Route path="/watchlist" element={<Watchlist />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Maroon;