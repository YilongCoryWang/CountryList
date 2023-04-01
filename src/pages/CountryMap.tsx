import React, { Suspense } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "antd";

const CountryMap: React.FC = () => {
  const navigate = useNavigate();
  const {
    state: { country },
  } = useLocation();
  const Map = React.lazy(() => import("../components/Map"));

  return (
    <div className="center">
      <h1>{country}</h1>
      <Suspense>
        <Map />
      </Suspense>
      <Button className="btn" onClick={() => navigate(-1)}>
        Back
      </Button>
    </div>
  );
};

export default CountryMap;
