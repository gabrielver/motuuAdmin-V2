import React from "react";
import "./styles/Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import Header_option from "./Header_option";
import HomeIcon from "@mui/icons-material/Home";
import FlagIcon from "@mui/icons-material/Flag";
import PersonIcon from "@mui/icons-material/Person";
import LocalAirportIcon from "@mui/icons-material/LocalAirport";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useDispatch } from "react-redux";
import { auth } from "../firebase";
import { logout } from "../features/userSlice";
import { Link } from "react-router-dom";

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
          <Header_option Icon={HomeIcon} title="Home" />
        </Link>
        <Link to="/Report">
          {" "}
          <Header_option Icon={FlagIcon} title="Reports" />
        </Link>

        <Link to="/User">
          <Header_option Icon={PersonIcon} title="User" />
        </Link>
        <Link to="/Travel">
          {" "}
          <Header_option Icon={LocalAirportIcon} title="Travels" />
        </Link>
        <Link to="/Location">
          <Header_option Icon={LocationOnIcon} title="Location" />
        </Link>
        <Header_option
          avatar="https://dw-wp-production.imgix.net/2021/02/Musk.jpg?w=1200&h=800&ixlib=react-9.0.3"
          title="Admin"
          onClick={logoutOfApp}
        />
      </div>
    </div>
  );
}

export default Header;
