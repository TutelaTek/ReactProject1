import React from "react";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from 'react-router-dom'; 
import Header from "./components/header";
import Login from "./components/login";
import Home from "./components/home";
import Location from "./components/location";
import Menu from "./components/menu";
import Contact from "./components/contact-us";
import Register from "./components/register";
import NewMenuItem from "./components/newMenuItem";
import NewLocation from "./components/newLocation";
import EditMenu from "./components/editMenuItem";
//import Posts from "./components/posts";
import './App.css'


function App() {
  /* React hook */
 
  return (
    <Router> 
    <div className="App">
      <Header />
        <Switch>
          <Route
            path= "/menu"
            render= {(props) => (
              <Menu {...props}  /> 
            )}
          />
          <Route
            path= "/location"
            render= {(props) => (
              <Location {...props}  /> 
            )}
          />
          
          <Route
            path= "/contact-us"
            render= {(props) => (
              <Contact {...props}  /> 
            )}
          />
          <Route
            path= "/login"
            render= {(props) => (
              <Login {...props}  /> 
            )}
          />

          <Route
            path= "/register"
            render= {(props) => (
              <Register {...props}  /> 
            )}
          />
          <Route
            path= "/newMenuItem"
            render= {(props) => (
              <NewMenuItem {...props}  /> 
            )}
          />
          <Route
            path= "/newLocation"
            render= {(props) => (
              <NewLocation {...props}  /> 
            )}
          />
          <Route
            path= "/editMenuItem/:id"
            render= {(props) => (
              <EditMenu {...props}  /> 
            )}
          />
          <Route
            path= "/"
            render= {(props) => (
              <Home {...props}  /> 
            )}
          />




        </Switch>
      </div>
    
    </Router>
  );
}

export default App;
