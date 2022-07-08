import React from "react";
import "./styles/Header_option.scss";
import { Avatar } from "@material-ui/core";

function Header_option({ Icon, title, avatar, onClick }) {
  return (
    <div onClick={onClick} className="header_option">
      {Icon && <Icon className="header_option_icon" />}
      {avatar && <Avatar className="header_option_icon" src={avatar} />}
      <h3 className="header_option_title">{title}</h3>
    </div>
  );
}

export default Header_option;
