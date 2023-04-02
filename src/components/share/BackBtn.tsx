import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";

const BackBtn = () => {
  const navigate = useNavigate()

  return (
    <>
      <Button className="btn" onClick={() => navigate(-1)}>
        Back
      </Button>
    </>
  );
};

export default BackBtn;
