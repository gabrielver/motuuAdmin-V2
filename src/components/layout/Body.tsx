import React from "react";
import Location from "../../views/dashboards/Location";
import Recap from "../../views/dashboards/Recap";
import Reports from "../../views/dashboards/Reports";
import Travel from "../../views/dashboards/Travel";
import User from "../../views/dashboards/User";
import "./Body.scss";

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
