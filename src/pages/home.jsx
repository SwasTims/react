import { Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

const Home = () => {
  
  return (
    <div>
      <Title>Home</Title>
      <div>
        <h3>Welcome to MaroonFlix!</h3>
        <p>Your one-stop destination for all your movie needs.</p>
      </div>
      <div>
        <h3>Featured Movies</h3>
        {/* Add movie cards or a list here */}
      </div>
      <div>
        <h3>Trending Now</h3>
        {/* Add trending movies or a list here */}
      </div>
    </div>
  );
};

export default Home;