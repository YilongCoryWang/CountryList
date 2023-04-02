import { render, screen } from "@testing-library/react";
import CountryCard from "../../components/CountryCard";
import { barbados } from "./Barbados";
import { BrowserRouter } from "react-router-dom";

describe("CountryCard", () => {
  const setups = () => {
    const { ...utils } = render(
      <BrowserRouter>
        <CountryCard country={barbados} />
      </BrowserRouter>
    );
    const code = screen.getByText("Country Code");
    const official = screen.getByText("Country Name");
    const timezones = screen.getByText("Time Zones");
    const callingCode = screen.getByText("Calling Code");
    const img = screen.getByTestId("country-card-national-flag");

    return {
      code,
      official,
      timezones,
      callingCode,
      img,
      ...utils,
    };
  };

  it("renders CountryCard with required contents", () => {
    const { code, official, timezones, callingCode, img } = setups();

    expect(code).toBeInTheDocument();
    expect(official).toBeInTheDocument();
    expect(timezones).toBeInTheDocument();
    expect(callingCode).toBeInTheDocument();
    expect(img).toBeInTheDocument();
  });
});
