import { render, screen } from "@testing-library/react";
import CountryCard from "../../components/CountryCard";
import { barbados } from "./Barbados";

describe("CountryCard", () => {
  const setups = () => {
    const { getByText, ...utils } = render(
      <CountryCard country={barbados} />
    );
    const code = screen.getByText("BB");
    const official = screen.getByText("Barbados");
    const timezones = screen.getByText("Timezones");
    const callingCode = screen.getByText("callingcode");

    return {
      code,
      official,
      timezones,
      callingCode,
      ...utils,
    };
  };

  it("renders CountryCard with required contents", () => {
    const { code, official } = setups();

    expect(code).toBeInTheDocument();
    expect(official).toBeInTheDocument();
  });
});
