import React from "react";
import PersonIcon from "@mui/icons-material/Person";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "./Recap.scss";

function Recap() {
  return (
    <div className="recap">
      <div className="recap_card">
        <div className="recap_car_info">
          <h2>Total Users</h2>
          <p>15263</p>
        </div>
        <div className="recap_card_icon">
          <PersonIcon />
        </div>
      </div>
      <div className="recap_card">
        <div className="recap_car_info">
          <h2>Total Travels</h2>
          <p>654</p>
        </div>
        <div className="recap_card_icon">
          <LocalAirportIcon />
        </div>
      </div>
      <div className="recap_card">
        <div className="recap_car_info">
          <h2>Total Location</h2>
          <p>146</p>
        </div>
        <div className="recap_card_icon">
          <LocationOnIcon />
        </div>
      </div>
    </div>
  );
}

export default Recap;
