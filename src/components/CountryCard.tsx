import React from "react";
import { Link } from "react-router-dom";
import { Col, Image, Row, Tooltip } from "antd";
import { CaretRightFilled } from "@ant-design/icons";

const CountryCard: React.FC<any> = ({ country }) => {
  const getTimezones = (timezones: string[]) => {
    if (timezones.length === 0) {
      return "";
    }
    return country.timezones.reduce((acc: string, timezone: string) => {
      return acc + " / " + timezone;
    });
  };

  const getCallingCode = (root: string, suffixes: string[]) => {
    if (!suffixes || suffixes.length === 0) {
      return "";
    }
    return suffixes.reduce((acc: string, suffix: string, index: number) => {
      return index === 0 ? acc + suffix : acc + " / " + root + suffix;
    }, root);
  };

  return (
    <div className="card-container">
      <Row>
        <Col xs={10} sm={10} md={10} lg={10} xl={10}>
          <div className="tool-tip">
            {country.cca2}
          </div>

          <div className="tool-tip">
            {country.name?.common}
          </div>

          <div className="tool-tip">
            <Tooltip
              placement="top"
              title={country.timezones && getTimezones(country.timezones)}
            >
              Time Zones
            </Tooltip>
          </div>

          <div className="tool-tip">
            <Tooltip
              placement="top"
              title={
                country.idd &&
                getCallingCode(country.idd.root, country.idd.suffixes)
              }
            >
              Calling Code
            </Tooltip>
          </div>
        </Col>
        <Col xs={10} sm={10} md={10} lg={10} xl={10}>
          <div className="image-vertical-container">
            <div className="image-vertical-inner">
              <Image
                data-testid="country-card-national-flag"
                height="80px"
                width="100px"
                src={country.flags.png}
                alt={country.flags.alt}
                preview={false}
              />
            </div>
          </div>
        </Col>
        <Col xs={4} sm={4} md={4} lg={4} xl={4}>
          <div className="arrow-container">
            <Link to={`/country/${country.cca2}`} state={{ country }}>
              <Tooltip placement="top" title="view details">
                <CaretRightFilled className="arrow" />
              </Tooltip>
            </Link>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default CountryCard;
