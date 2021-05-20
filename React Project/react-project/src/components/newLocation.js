import React, { useState, useEffect } from "react";
import LocationData from "../services/locations";

const NewLocations = () => {

    const initialLocationState = {
        name: "",
        street: "",
        address: "",
        hours: "",
        phone: ""
      }
    
      const [newLocation, setnewLocation] = useState(initialLocationState);
    
    
      const handleImputChange = event => {
        const { name, value} = event.target;
        setnewLocation({ ...newLocation, [name]: value })
      }
    
      const submit = () => {
          console.log(newLocation);
        LocationData.createLocation(newLocation);
        setnewLocation(initialLocationState);
      }

    return(
        <div className="App content">
    
    <form id=""  >
      <input  
        type="text" 
        id="name" 
        name="name" 
        onChange={handleImputChange} 
        placeholder="Location Name" 
        value ={newLocation.name}/> <br/>

      <input 
        type="text" 
        id="street"  
        name="street" 
        onChange={handleImputChange} 
        placeholder="Street" 
        value ={newLocation.street}/><br/>

      <input 
        type="text" 
        id="address"  
        name="address" 
        onChange={handleImputChange} 
        placeholder="address" 
        value ={newLocation.address}/><br/>

        <input 
        type="text" 
        id="hours"  
        name="hours" 
        onChange={handleImputChange} 
        placeholder="hours" 
        value ={newLocation.hours}/><br/>

<input 
        type="text" 
        id="phone"  
        name="phone" 
        onChange={handleImputChange} 
        placeholder="phone" 
        value ={newLocation.phone}/><br/>

      
      <div className="submit" onClick={submit}>
        Submit
      </div>
      </form>
        </div>
    )
      }

      export default NewLocations;