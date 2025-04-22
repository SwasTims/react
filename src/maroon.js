import { Layout } from 'antd';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './component/sidebar';
import About from './pages/about';
import Contact from './pages/contact';
import Courses from './pages/courses';
import Home from './pages/home';


const {  Sider, Content } = Layout;
const Maroon = () => {
const [collapsed] = useState(false);
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} trigger={null}>
        <Sidebar />
      </Sider>
      <Layout>
          <h2 style={{ margin: '16px',textAlign:'center', padding:'5px'}}>Himalaya Darshan College</h2>
        <Content style={{ margin: '16px', textAlign:'center',padding: '20px', background: 'white' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Maroon;
