import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Map from "../components/Map";
import BackBtn from "../components/share/BackBtn";

const CountryMap: React.FC = () => {
  const navigate = useNavigate();
  const {
    state: { country },
  } = useLocation();

  return (
    <div className="center">
      <h1>{country}</h1>
      <Map />
      <BackBtn />
    </div>
  );
};

export default CountryMap;
