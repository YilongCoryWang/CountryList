import { render, screen } from "@testing-library/react";
import MapContainer from "../../pages/MapContainer";
import { barbados } from "../__components__/Barbados";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../store"

describe("MapContainer", () => {
  const setups = () => {
    const { ...utils } = render(
      <Provider store={store}>
      <MemoryRouter initialEntries={[`/country/${barbados.cca2}/map`]}>
        <Routes>
          <Route
            path="country/:id/map"
            element={<MapContainer />}
          />
        </Routes>
      </MemoryRouter>
      </Provider>
    );

    const btn = screen.getByRole("button");

    return {
      btn,
      ...utils,
    };
  };

  it("renders MapContainer with back button", () => {
    const { btn } = setups();

    expect(btn).toBeInTheDocument();
  });
});
