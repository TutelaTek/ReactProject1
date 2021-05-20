import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/PhilsDiner.png";

const Header = () => {
    return(
<div className="App">
      <nav>
      <div className="logo">
        <img src={Logo} alt="Phil's Diner Logo"/>
      </div>
        <ul>
          <li>
          <NavLink to={"/"} className="nav-link">
            Home
          </NavLink>
         </li>
         <li>
          <NavLink to={"/menu"} className="nav-link">
            Menu
          </NavLink>
         </li>
         <li>
           <NavLink to={"/location"} className="nav-link">
             Location
            </NavLink>
          </li>
          <li>
            <NavLink to={"/contact-us"} className="nav-link">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to={"/login"} className="nav-link">
              Login
            </NavLink>
          </li>
        </ul>
      </nav>

      {/* React Router */}
      </div>
    )
      }

      export default Header;