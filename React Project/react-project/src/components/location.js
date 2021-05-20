import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import LocationData from "../services/locations";
import '../styles/location.css';
import plus from '../images/plus.png';

function Location() {
  // set State hooks
  const [locationItems, setLocationItems] = useState([]);

  // use effect
  useEffect(() => {
    retrieveLocations();
  }, []);

  const retrieveLocations = () => {
    // get all items  then setMenuItems
    LocationData.getAll()
    .then(res => {
      console.log(res.data);
      setLocationItems(res.data);
    });
  }

  function deleteItem(id){
    
    LocationData.delete(id);
    window.location.reload(false);
  }

  return (
    <div className="App">
      
      <div className="content">
      <h1>Locations</h1>
      
      <div className="location-cardholder">
      <Link to="/newLocation">
      <div className="location-card addLocation" >
      <img className="plusImage" src={plus} alt="plus"/>
        </div>
        
        </Link>
        {locationItems.map((item) => {
          return(
        <div className="location-card" key={item._id}>
          <div className="closeButton" onClick={() => deleteItem(item._id)}  variant="danger">X</div>
        <div className="location-title">
          <h3>{item.name}</h3>
        </div>
        <div className="location-info">

          <p className="location-address">{item.street} <br/>{item.address}</p>
          <div className="hours">Open: {item.hours}</div>
          <div className="location-phone">Phone: {item.phone}</div>
        </div>
        </div>
        )})}
      </div>
    </div>
    </div>
    
  );
}

export default Location;