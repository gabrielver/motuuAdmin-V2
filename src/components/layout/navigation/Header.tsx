import React, { useState }  from "react";
import "./Header.scss";
import SearchIcon from "@mui/icons-material/Search";
import HeaderOption from "./HeaderOption";
import { useDispatch } from "react-redux";
import { auth } from "../../../utils/firebase";
import { logout } from "../../../store/authentification/userSlice";

import '../../../i18n';
import i18n from 'i18next';
import { useTranslation } from "react-i18next";


function Header() {
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  }
  const { t } = useTranslation(); 
 
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

          onClick={logoutOfApp}/>
      <div className="lgn_Button">
        <button onClick={() => changeLanguage('fr')}>Fr</button>|
        <button onClick={() => changeLanguage('en')}>En</button>
      </div>
      </div>
    </div>
  );
}

export default Header;
