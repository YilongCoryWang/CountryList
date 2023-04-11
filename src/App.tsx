import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Loading from "./components/share/Loading";
import "./styles/App.scss";

function App() {
  const CountryDetails = React.lazy(() => import("./pages/CountryDetails"));
  const MapContainer = React.lazy(() => import("./pages/MapContainer"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="country/:id"
          element={
            <Suspense fallback={<Loading />}>
              <CountryDetails />
            </Suspense>
          }
        />
        <Route
          path="country/:name/map"
          element={
            <Suspense fallback={<Loading />}>
              <MapContainer />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
