import React, { useState, useEffect } from "react";
import RestaurantData from "../services/restaurant";

const EditItem = (props) => {

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

      useEffect(() => {
        retrieveItem();
      }, []);

      const retrieveItem = () => {
          console.log(props.match.params.id);
        RestaurantData.getOne(props.match.params.id)
    .then(res => {
      console.log(res.data);
      
      console.log(res.data[0])
      setnewItem(res.data[0]);
      
    });
      }


    
      const submit = () => {
          console.log(newItem);
        RestaurantData.edit_Item(newItem);
        setnewItem(initialMenuItemState);
        props.history.push('/menu');
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

      export default EditItem;