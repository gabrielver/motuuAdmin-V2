import React from "react";
import Body from "./Body";
import Header from "./navigation/Header";
import "./Main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocationDetails from "../../views/Locations/LocationDetails";

import UserDetails from "../../views/Users/UserDetails";
import TravelDetails from "../../views/Travels/TravelDetails";
import ErrorPage from "./ErrorPage";
import PlaceDetails from "../../views/Places/PlaceDetails";

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
