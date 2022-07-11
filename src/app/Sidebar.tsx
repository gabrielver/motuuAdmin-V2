import React from "react";
import "./styles/Sidebar.scss";

function Sidebar() {
  return (
    <div className="sidebar">
      <h1>Motuu</h1>
      <div className="menu_main">
        <div className="menu">
          <p>menu 1</p>
          <div className="sous_menu">
            <p>sous menu 1</p>
            <p>sous menu 2</p>
            <p>sous menu 3</p>
          </div>
        </div>
        <div className="menu">
          <p>menu 2</p>
          <div className="sous_menu">
            <p>sous menu 1</p>
            <p>sous menu 2</p>
            <p>sous menu 3</p>
          </div>
        </div>
        <div className="menu">
          <p>menu 3</p>
          <div className="sous_menu">
            <p>sous menu 1</p>
            <p>sous menu 2</p>
            <p>sous menu 3</p>
          </div>
        </div>
        <div className="menu">
          <p>menu 4</p>
          <div className="sous_menu">
            <p>sous menu 1</p>
            <p>sous menu 2</p>
            <p>sous menu 3</p>
          </div>
        </div>
        <div className="menu">
          <p>menu 5</p>
          <div className="sous_menu">
            <p>sous menu 1</p>
            <p>sous menu 2</p>
            <p>sous menu 3</p>
          </div>
        </div>
        <div className="menu">
          <p>menu 6</p>
          <div className="sous_menu">
            <p>sous menu 1</p>
            <p>sous menu 2</p>
            <p>sous menu 3</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
