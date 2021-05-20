import React, { useState, useEffect } from "react";
import RestaurantData from "../services/restaurant";

const NewItem = () => {

    const initialMenuItemState = {
        name: "",
        description: "",
        price: ""
      }
    
      const [newItem, setnewItem] = useState(initialMenuItemState);
    
    
      const handleImputChange = event => {
        const { name, value} = event.target;
        setnewItem({ ...newItem, [name]: value })
      }
    
      const submit = () => {
          console.log(newItem);
        RestaurantData.menuItemPost(newItem);
        setnewItem(initialMenuItemState);
      }

    return(
        <div className="App content">
    
    <form id=""  >
      <input  
        type="text" 
        id="name" 
        name="name" 
        onChange={handleImputChange} 
        placeholder="Item Name" 
        value ={newItem.name}/> <br/>

      <input 
        type="text" 
        id="description"  
        name="description" 
        onChange={handleImputChange} 
        placeholder="description" 
        value ={newItem.description}/><br/>

      <input 
        type="text" 
        id="price"  
        name="price" 
        onChange={handleImputChange} 
        placeholder="price" 
        value ={newItem.price}/><br/>

      
      <div className="submit" onClick={submit}>
        Submit
      </div>
      </form>
        </div>
    )
      }

      export default NewItem;