import React, { Component } from "react";

 const NavBar = ({ totalCounters }) => {
    return (
      <nav className="navbar navbar-light bg-light container">
        <a className="navbar-brand" href="#">
          Total Counters <span className="bade badge-pill badge-secondary">
              {totalCounters}
          </span>
        </a>
      </nav>
    );
    }




export default NavBar;
