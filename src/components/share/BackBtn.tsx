import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
import { IBackBtnProps } from '../../ts/interfaces'

const BackBtn: React.FC<IBackBtnProps> = ({ handleClick }) => {
  const navigate = useNavigate();

  return (
    <>
      <Button
        className="btn"
        onClick={() => (!handleClick ? navigate(-1) : handleClick())}
      >
        Back
      </Button>
    </>
  );
};

export default BackBtn;
