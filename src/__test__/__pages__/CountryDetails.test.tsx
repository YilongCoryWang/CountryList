import { render, screen } from "@testing-library/react";
import CountryDetails from "../../pages/CountryDetails";
import { barbados } from "../__components__/Barbados";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store"

describe("CountryDetails", () => {
  const setups = () => {
    const { ...utils } = render(
      <Provider store={store}>
      <MemoryRouter initialEntries={[`/country/${barbados.cca2}`]}>
        <Routes>
          <Route
            path="country/:id"
            element={<CountryDetails country={barbados} />}
          />
        </Routes>
      </MemoryRouter>
      </Provider>
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
