import React from "react";
import "/src/styles/layout/Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
// import HomeIcon from "@mui/icons-material/Home";
// import FlagIcon from "@mui/icons-material/Flag";
// import PersonIcon from "@mui/icons-material/Person";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { logout } from "../store/userSlice";
import { Link } from "react-router-dom";

import { HomeIcon } from '@heroicons/react/solid'
import { FlagIcon } from '@heroicons/react/solid'
import { UserIcon } from '@heroicons/react/solid'
import { GlobeIcon } from '@heroicons/react/solid'
import { LocationMarkerIcon } from '@heroicons/react/solid'


import { StarIcon } from '@heroicons/react/outline'

function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    
    <div className="header">
      <div className="header_left">
        <div className="burger">
          <ul>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>

        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search ..." />
        </div>
      </div>
      <div className="header_right">
        <Link to="/">
          <HeaderOption Icon={HomeIcon} title="Home" avatar={undefined}
  />
        </Link>
        <Link to="/Place">
          {" "}
          <HeaderOption Icon={FlagIcon} title="Place" avatar={undefined} />
        </Link>

        <Link to="/User">
          <HeaderOption Icon={UserIcon} title="User" avatar={undefined}  />
        </Link>
        <Link to="/Travel">
          {" "}
          <HeaderOption Icon={GlobeIcon} title="Travels" avatar={undefined} 
        />
        </Link>
        <Link to="/Location">
          <HeaderOption Icon={LocationMarkerIcon} title="Location" avatar={undefined} 
         />
        </Link>
        <HeaderOption
          avatar="https://dw-wp-production.imgix.net/2021/02/Musk.jpg?w=1200&h=800&ixlib=react-9.0.3"
          title="Admin"

          onClick={logoutOfApp}        />
      </div>
    </div>
  );
}

export default Header;
