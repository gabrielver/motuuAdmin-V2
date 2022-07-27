import React, { useState } from "react";
import "./menu.scss";

import HeaderOption from "./HeaderOption";


import {ChevronDownIcon} from '@heroicons/react/solid'
import {ChevronUpIcon} from '@heroicons/react/solid'
import { HomeIcon} from '@heroicons/react/solid'
import { FlagIcon } from '@heroicons/react/solid'
import { UserIcon } from '@heroicons/react/solid'
import { GlobeIcon } from '@heroicons/react/solid'
import { LocationMarkerIcon } from '@heroicons/react/solid'
import { Link } from "react-router-dom";

function menu() {

  const [open, setOpen] = useState(false);
 

   
  return (
    <div className="menu">
      <a href="/"><h1>Motuu</h1></a>
        <Navbar>
           <Link to='/'><NavItem icon={<HomeIcon/>} title="Dashboard"></NavItem></Link> 
            
            <NavItem icon={<FlagIcon/>} title="Place" downIcon={<ChevronDownIcon/>} upIcon={<ChevronUpIcon/>}>
               {/* <DropDownMenu></DropDownMenu> */}
               <div className="dropdown">
                <a href="/Place">All the places</a>
                <a href="/Place">Flag about places</a>
                <a href="/Place">Charts</a>
                <a href="/Place">Place by continent</a>
                <a href="/Place">Create new place</a>
               </div>
            </NavItem>
            <NavItem icon={<UserIcon/>} title="User" downIcon={<ChevronDownIcon/>} upIcon={<ChevronUpIcon/>}>
            {/* <DropDownMenu></DropDownMenu> */}
            <div className="dropdown">
                <a href="/UserList">User database</a>
                <a href="/UserFlag">Flag about users</a>
                <a href="/UserChart">Charts</a>
                <a href="/UserCreate">Create new user</a>
               </div>
            </NavItem>
            <NavItem icon={<GlobeIcon/>} title="Travels" downIcon={<ChevronDownIcon/>} upIcon={<ChevronUpIcon/>} >
            {/* <DropDownMenu></DropDownMenu> */}
            <div className="dropdown">
                <a href="/Travel">All our Travels</a>
                <a href="/Travel">Family travels</a>
                <a href="/Travel">Couple Travels</a>
                <a href="/Travel">Travel to validate</a>
                <a href="/Travel">Create new Travel</a>
               </div>
            </NavItem>
            <NavItem icon={<LocationMarkerIcon/>} title="Location" downIcon={<ChevronDownIcon/>} upIcon={<ChevronUpIcon/>}>
            {/* <DropDownMenu></DropDownMenu> */}
            <div className="dropdown">
                <a href="/Location">List of locations</a>
                <a href="/Location">Location map</a>
                <a href="/Location">Flagged location</a>
                <a href="/Location">Location to validate</a>
                <a href="/location">Create new location</a>
               </div>
            </NavItem>
        </Navbar>
    </div>
  );
}

function Navbar(props) {
    return(
        <nav className="navbar">
            <ul className="navbar_nav"> {props.children}</ul>
        </nav>
    )
}
function NavItem(props) {

const [open, setOpen] = useState(false);


return(
    <li className="nav-item">
        <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
            <div className="icon">
            {props.icon}
            {props.title}
            </div>
            <span className="caret">{!open && props.downIcon}
            {open && props.upIcon}</span>
        </a>
        {open && props.children}
        
    </li>
)
}
// function DropDownMenu(){

//     function DropDownItem(props) {
//         return(
//             <a href="#" className="menu-item">
//                 <span className="icon-button">{props.leftIcon}</span>
//                 {props.children}
//                 <span className="icon-right">{props.IconRight2}</span>
//             </a>
//         )
//     }

//     return(
//         <div className="dropdown">
//         <DropDownItem>List</DropDownItem>
//         <DropDownItem>Graph</DropDownItem>
//         <DropDownItem>Reports</DropDownItem>
//         </div>
//     )
// }
export default menu;
