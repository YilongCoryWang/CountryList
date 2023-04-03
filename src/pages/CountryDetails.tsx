import React from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { Button, Image } from "antd";
import BackBtn from "../components/share/BackBtn";
import ErrorMessage from "../components/share/ErrorMessage";
import getCountryByName from "../helpers/getCountryByName";
import { RootState } from "../store";
import { useSelector } from "react-redux";

const CountryDetails: React.FC<any> = (props) => {
  const {
    countryAll,
  } = useSelector((state: RootState) => state.country);
  const navigate = useNavigate();
  const { state } = useLocation();
  const { id } = useParams();
  let country = !!state ? state.country : props.country;

  if (!country) {
    const rst = getCountryByName(countryAll, id!);
    if (!rst[0]) {
      return <ErrorMessage error={"Opps, cannot find the content."} />;
    } else {
      country = rst[0];
    }
  }

  return (
    <div className="country-detail-container">
      <div className="center image-container">
        <Image
          src={country.flags.png}
          alt={country.flags.alt}
          preview={false}
        />
        <h1>{country.name.official}</h1>
        <div className="text-box">
          <h5>Area: {country.area}</h5>
          <h5>
            Capital:{" "}
            {country.capital.map((c: string) => (
              <span key={c}>{c}</span>
            ))}
          </h5>
          <h5>Region: {country.region}</h5>
          <h5>Population: {country.population}</h5>
        </div>
      </div>

      <Button
        className="btn"
        onClick={() => {
          navigate(`/country/${country.cca2}/map`, {
            state: { country: country },
          });
        }}
      >
        Show on the Map
      </Button>

      <BackBtn />
    </div>
  );
};

export default CountryDetails;
