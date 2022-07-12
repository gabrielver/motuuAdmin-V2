import React from "react";
import Body from "./Body";
import Header from "./Header";
import "/src/styles/layout/Main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocationDetails from "./components/LocationDetails";

import UserDetails from "./components/UserDetails";
import TravelDetails from "./components/TravelDetails";
import ErrorPage from "./components/ErrorPage";
import PlaceDetails from "./components/PlaceDetails";

function Main() {
  return (
    <Router>
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Place" element={<PlaceDetails />} />
          <Route path="/User" element={<UserDetails />} />
          <Route path="/Travel" element={<TravelDetails />} />
          <Route path="/Location" element={<LocationDetails />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        {/* <Body /> */}

        {/* footer */}
      </div>
    </Router>
  );
}

export default Main;
