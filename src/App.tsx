import React, { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Loading from "./components/share/Loading";
import "./styles/App.scss";

function App() {
  const CountryDetails = React.lazy(() => import("./pages/CountryDetails"));
  const CountryMap = React.lazy(() => import("./pages/CountryMap"));

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/country/:id"
          element={
            <Suspense fallback={<Loading />}>
              <CountryDetails />
            </Suspense>
          }
        />
        <Route
          path="/country/:id/map"
          element={
            <Suspense fallback={<Loading />}>
              <CountryMap />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
