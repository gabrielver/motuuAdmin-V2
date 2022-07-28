import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'


import LocationDetails from "../../views/Locations/LocationDetails";
import UserDetails from "../../views/Users/UserDetails";
import TravelDetails from "../../views/Travels/TravelDetails";
import ErrorPage from "./ErrorPage";
import PlaceDetails from "../../views/Places/PlaceDetails";
import UserCreate from "../../views/Users/UserCreate";
import UserFlag from "../../views/Users/UserFlag";
import UserCharts from "../../views/Users/UserCharts";
import Body from './Body';

import {AnimatePresence} from 'framer-motion';

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
       
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
    </AnimatePresence>
  )
}

export default AnimatedRoutes