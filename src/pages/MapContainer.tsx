import React from "react";
import { useLocation, useParams } from "react-router-dom";
import Map from "../components/Map";
import BackBtn from "../components/share/BackBtn";
import getCountryByName from "../helpers/getCountryByName";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import ErrorMessage from "../components/share/ErrorMessage";

const MapContainer: React.FC = () => {
  const { countryAll } = useSelector((state: RootState) => state.country);
  const { name } = useParams();
  const { state } = useLocation();
  let country;

  if (!state) {
    let rst = getCountryByName(countryAll, name!);
    if (!rst[0]) {
      return <ErrorMessage error={"Opps, cannot find the content."} />;
    } else {
      country = rst[0];
    }
  } else {
    country = state.country;
  }

  return (
    <div className="center">
      <h1>{country.name.official}</h1>
      <Map countryName={country.name.official} />
      <BackBtn />
    </div>
  );
};

export default MapContainer;
