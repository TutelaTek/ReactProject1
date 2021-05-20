import React from "react";
//import {Link } from "react-router-dom";
import '../styles/index.css';

const Home = props =>{
  return (
    <div className="App">
    <div className="content">
      <div className="welcome">

      <h1>Welcome!</h1>
      <div className="paraContainer">
      <p>Our mission at Phil's Diner is to establish beneficial business relationships
         with diverse suppliers who share our commitment to exceptional quality,
          excellent customer service and competitive pricing.</p>
          </div>
         <img className="diner" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSilutN4VGHCaXb0QDLqm_RDNXYhWC-m3DiYQ&usqp=CAU" alt="Diner"/>
      </div>
    </div>
    </div>
    
  );
}

export default Home;
