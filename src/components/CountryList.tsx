import React from "react";
import { Col, Row, Spin } from "antd";
import useGetCountries from "../hooks/useGetCountries";
import CountryCard from "./CountryCard";

const CountryList: React.FC = () => {
  const { data: countries, isLoading } = useGetCountries();

  if (isLoading) {
    return (
      <div className='loading-container'>
        <Spin size="large" />
        <div className='loading-text'>Loading...</div>
      </div>
    );
  }

  return (
    <Row>
      {countries.map((country: any) => (
        <Col xs={24} sm={12} md={8} lg={6} key={country.cca2}>
          <CountryCard key={country.cca2} country={country}></CountryCard>
        </Col>
      ))}
    </Row>
  );
};

export default React.memo(CountryList);
