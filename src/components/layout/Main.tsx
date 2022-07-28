import React from "react";
import Body from "./Body";
import Header from "./navigation/Header";
import "./Main.scss";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import LocationDetails from "../../views/Locations/LocationDetails";
import UserDetails from "../../views/Users/UserDetails";
import TravelDetails from "../../views/Travels/TravelDetails";
import ErrorPage from "./ErrorPage";
import PlaceDetails from "../../views/Places/PlaceDetails";
import Menu from "./navigation/menu";
import UserCreate from "../../views/Users/UserCreate";
import UserFlag from "../../views/Users/UserFlag";
import UserCharts from "../../views/Users/UserCharts";
import {gsap} from 'gsap'
import barba from '@barba/core';
import { AnimatePresence} from 'framer-motion'
import AnimatedRoutes from "./AnimatedRoutes";

function Main() {

  return (
    <Router>
      <div className="main">
        <Header />
        <Menu/>
        <div className="main_body">
          <AnimatedRoutes />
        </div>
      </div>
    </Router>
  );
}

export default Main;
