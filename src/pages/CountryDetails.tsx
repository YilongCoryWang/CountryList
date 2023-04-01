import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button, Image } from "antd";

const CountryDetails: React.FC<any> = (props) => {
  const navigate = useNavigate();
  const { state } = useLocation();
  let country = !state ? props.country : state.country;

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
            state: { country: country.name.common },
          });
        }}
      >
        Show on the Map
      </Button>
      <Button className="btn" onClick={() => navigate("/")}>
        Back
      </Button>
    </div>
  );
};

export default CountryDetails;
