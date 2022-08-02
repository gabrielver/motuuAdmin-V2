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
                <Link to="/Place">All the places</Link>
                <Link to="/Place">Flag about places</Link>
                <Link to="/Place">Charts</Link>
                <Link to="/Place">Place by continent</Link>
                <Link to="/Place">Create new place</Link>
               </div>
            </NavItem>
            <NavItem icon={<UserIcon/>} title="User" downIcon={<ChevronDownIcon/>} upIcon={<ChevronUpIcon/>}>
            {/* <DropDownMenu></DropDownMenu> */}
            <div className="dropdown">
                <Link to="/UserList" >User database</Link>
                <Link to="/UserFlag" >Flag about users</Link>
                <Link to="/UserChart" >Charts</Link>
                <Link to="/UserCreate" >Create new user</Link>
               </div>
            </NavItem>
            <NavItem icon={<GlobeIcon/>} title="Travels" downIcon={<ChevronDownIcon/>} upIcon={<ChevronUpIcon/>} >
            {/* <DropDownMenu></DropDownMenu> */}
            <div className="dropdown">
                <Link to="/Travel">All our Travels</Link>
                <Link to="/Travel">Family travels</Link>
                <Link to="/Travel">Couple Travels</Link>
                <Link to="/Travel">Travel to validate</Link>
                <Link to ="/Travel">Create new Travel</Link>
               </div>      
            </NavItem>
            <NavItem icon={<LocationMarkerIcon/>} title="Location" downIcon={<ChevronDownIcon/>} upIcon={<ChevronUpIcon/>}>
            {/* <DropDownMenu></DropDownMenu> */}
            <div className="dropdown">
                <Link to="/Location">List of locations</Link>
                <Link to="/Location">Location map</Link>
                <Link to="/Location">Flagged location</Link>
                <Link to="/Location">Location to validate</Link>
                <Link to="/location">Create new location</Link>
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
