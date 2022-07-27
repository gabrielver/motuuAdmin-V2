import React, { useState }  from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { auth } from "../../../utils/firebase";
import { logout } from "../../../store/authentification/userSlice";




function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

 
  return (
    
    <div className="header">
      <div className="header_left">
        <div className="burger" >
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
 
        <HeaderOption
          avatar="https://dw-wp-production.imgix.net/2021/02/Musk.jpg?w=1200&h=800&ixlib=react-9.0.3"
          title="Admin"

          onClick={logoutOfApp}        />
      </div>
    </div>
  );
}

export default Header;
