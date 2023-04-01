import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";
import Map from "../components/Map";

const CountryMap: React.FC = () => {
  const navigate = useNavigate();
  const {
    state: { country },
  } = useLocation();

  return (
    <div className="center">
      <h1>{country}</h1>
      <Map />
      <Button className="btn" onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  );
};

export default CountryMap;
