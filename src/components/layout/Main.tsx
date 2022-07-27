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
import Menu from "./navigation/menu";
import UserCreate from "../../views/Users/UserCreate";
import UserFlag from "../../views/Users/UserFlag";
import UserCharts from "../../views/Users/UserCharts";
function Main() {
  return (
    <Router>
      <div className="main">
        <Header />
        <Menu/>
        <div className="main_body">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Place" element={<PlaceDetails />} />
          <Route path="/UserCreate" element={<UserCreate />} />
          <Route path="/UserList" element={<UserDetails />} />
          <Route path="/UserFlag" element={<UserFlag />} />
          <Route path="/UserChart" element={<UserCharts />} />
          <Route path="/Travel" element={<TravelDetails />} />
          <Route path="/Location" element={<LocationDetails />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        </div>
        
        {/* <Body /> */}

        {/* footer */}
      </div>
    </Router>
  );
}

export default Main;
