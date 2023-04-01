import React from "react";
import { Button, Col, Row, Spin } from "antd";
import useGetCountries from "../hooks/useGetCountries";
import CountryCard from "./CountryCard";
import { useSelector } from "react-redux";
import { RootState } from "../store/index";
import store from "../store/index";
import { updateCountrySearch } from "../store/countrySearch.slice";

const CountryList: React.FC = () => {
  const { data: countries, isLoading } = useGetCountries();
  const { countrySearch } = useSelector((state: RootState) => state.country);

  if (isLoading) {
    return (
      <div className="loading-container">
        <Spin size="large" />
        <div className="loading-container">Loading...</div>
      </div>
    );
  }

  let filteredCountries = countries;
  if (countrySearch !== "") {
    filteredCountries = countries.filter(
      ({ name: { common, official }, cca2, cca3 }: any) => {
        return (
          common.toUpperCase().includes(countrySearch.toUpperCase()) ||
          official
            .toUpperCase()
            .includes(countrySearch.toUpperCase()) ||
          cca2.toUpperCase().includes(countrySearch.toUpperCase()) ||
          cca3.toUpperCase().includes(countrySearch.toUpperCase())
        );
      }
    );
  }

  return (
    <>
      <Row>
        {filteredCountries.map((country: any) => (
          <Col xs={24} sm={12} md={8} lg={6} key={country.cca2}>
            <CountryCard key={country.cca2} country={country}></CountryCard>
          </Col>
        ))}
      </Row>
      {countrySearch !== "" && (
        <Button
          className="btn"
          style={{ display: "block" }}
          onClick={() => store.dispatch(updateCountrySearch(""))}
        >
          View Full List
        </Button>
      )}
    </>
  );
};

export default React.memo(CountryList);
