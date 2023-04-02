import React from "react";
import { useSelector } from "react-redux";
import { Button, Col, Row } from "antd";
import store, { RootState } from "../store/index";
import CountryCard from "../components/CountryCard";
import { doCountrySearch } from "../store/country.slice";
import ErrorMessage from "./share/ErrorMessage";
import { ICountry } from "../ts/interfaces";

const CountryList: React.FC = () => {
  const {
    filter: { keyword, countryFiltered },
  } = useSelector((state: RootState) => state.country);

  return (
    <>
      <Row>
        {countryFiltered.map((country: ICountry) => (
          <Col xs={24} sm={12} md={8} lg={6} key={country.cca2}>
            <CountryCard key={country.cca2} country={country}></CountryCard>
          </Col>
        ))}
      </Row>

      {keyword !== "" && countryFiltered.length === 0 && (
        <ErrorMessage
          error={`Opps, cannot find the county with keyword: "${keyword}"`}
          isShowBackBtn={false}
        />
      )}

      {keyword !== "" && countryFiltered.length !== 0 && (
        <Button
          className="btn"
          style={{ display: "block" }}
          onClick={() => store.dispatch(doCountrySearch(""))}
        >
          Back to Full List
        </Button>
      )}
    </>
  );
};

export default React.memo(CountryList);
