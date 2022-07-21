import React, { ReactElement, SVGProps } from "react";
import "./headerOption.scss";
import { Avatar, SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@mui/material/OverridableComponent";



function HeaderOption({ Icon, title, avatar, onClick}:{ Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element ; title: string; avatar: any, onClick?: () => void }){
  return (
   
    <div onClick={onClick} className="header_option">
      {Icon && <Icon className="header_option_icon" />}
      {avatar && <Avatar className="header_option_icon" src={avatar} />}
      <h3 className="header_option_title">{title}</h3>
    </div>
 
  );
}

export default HeaderOption;
