import { Typography } from 'antd';
import React from 'react';

const { Title } = Typography;

const watchList = () => {

  return (
    <div>
      <Title>WatchList</Title>
      <div>
        <h3>Watching</h3>
      </div>
      <div>
        <h3>Want To Watch</h3>
      </div>
      <div>
        <h3>Completed</h3>
      </div>
    </div>
  );
};

export default watchList;
