import React from "react";
import Body from "./Body";
import Header from "./Header";
import "./styles/Main.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LocationDetails from "./components/LocationDetails";
import ReportDetail from "./components/ReportDetails";
import UserDetails from "./components/UserDetails";
import TravelDetails from "./components/TravelDetails";
import ErrorPage from "./components/ErrorPage";

function Main() {
  return (
    <Router>
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/Report" element={<ReportDetail />} />
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
