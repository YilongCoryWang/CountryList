import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import CountryMap from "./pages/CountryMap";
import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:id" element={<CountryDetails />} />
        <Route path="/country/:id/map" element={<CountryMap />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
