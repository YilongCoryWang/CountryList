import { render, screen } from "@testing-library/react";
import CountryDetails from "../../pages/CountryDetails";
import { barbados } from "../__components__/Barbados";

describe("CountryDetails", () => {
  const setups = () => {
    const { getByText, ...utils } = render(
      <CountryDetails country={barbados} />
    );
    const official = screen.getByText("Barbados");
    const area = screen.getByText("Area: 430");
    const capital = screen.getByText("Bridgetown");
    const region = screen.getByText("Region: Americas");
    const population = screen.getByText("Population: 287371");

    return {
      official,
      area,
      capital,
      region,
      population,
      ...utils,
    };
  };

  it("renders CountryDetails with required contents", () => {
    const { official, area, capital, region, population } = setups();

    expect(official).toBeInTheDocument();
    expect(area).toBeInTheDocument();
    expect(capital).toBeInTheDocument();
    expect(region).toBeInTheDocument();
    expect(population).toBeInTheDocument();
  });
});
