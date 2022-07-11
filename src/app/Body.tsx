import React from "react";
import Location from "./components/Location";
import Recap from "./components/Recap";
import Reports from "./components/Reports";
import Travel from "./components/Travel";
import User from "./components/User";
import "./styles/Body.scss";

function Body() {
  return (
    <div className="body">
      <Recap />
      <Reports />
      <User />
      <Travel />
      <Location />
    </div>
  );
}

export default Body;
