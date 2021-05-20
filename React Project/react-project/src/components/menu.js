import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import RestaurantData from "../services/restaurant";
import hamburger from '../images/Hamburger.jpg';
import '../styles/menu.css';
import plus from '../images/plus.png';

const Menu = props => {
  // set State hooks
  const [menuItems, setMenuItems] = useState([]);

  // use effect
  useEffect(() => {
    retrieveMenuItems();
  }, []);


  const retrieveMenuItems = () => {
    // get all items  then setMenuItems
    RestaurantData.getAll()
    .then(res => {
      console.log(res.data);
      setMenuItems(res.data);
    });
  }

  function deleteItem(id){
    
    RestaurantData.delete(id);
    window.location.reload(false);
  }

 
  return (
    // map through the array of menu objects
    
    <div className="card-holder">
      <Link to="/newMenuItem">
      <div className="items addItem" >
         <img src={plus} alt="plus"/>
      </div> 
      </Link>
      {menuItems.map((item ) => {
        return(
          
      <div  key={item._id} >
        <Link to={"/editMenuItem/" + item._id} >
        <div className="items" >
        <div className="closing" onClick={() => deleteItem(item._id)}>X</div>
          <img src={hamburger} alt="Hamburger" className="items-picture"/>
          <div className="items-info">
          <h3>{item.name}</h3>
          <p className="description">{item.description}</p>
          <div className="price">${item.price}</div>
          </div>
      </div>   
      </Link>
    </div>
      )})}
    </div>
  );
}

export default Menu;