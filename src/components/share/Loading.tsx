import React from "react";
import { Spin } from "antd";

const Loading: React.FC = () => {
  return (
    <div className="center loading-container">
      <Spin size="large" />
      <div className="loading-text">Loading...</div>
    </div>
  );
};

export default Loading;
