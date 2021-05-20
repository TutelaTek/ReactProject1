import React, {useState} from "react";
import CommentData from "../services/comments";
import '../styles/contact.css';

function Contact() {
  const initialCommentState = {
    fname: "",
    lname: "",
    email: "",
    phone: "",
    message: ""
  }

  const [userComment, setuserComment] = useState(initialCommentState);


  const handleImputChange = event => {
    const { name, value} = event.target;
    setuserComment({ ...userComment, [name]: value })
  }

  const submit = () => {
    CommentData.postComment(userComment);
  }

  return (
    <div className="App">
      <div className="content">
      <form id=""  >
      <input  
        type="text" 
        id="fname" 
        name="fname" 
        onChange={handleImputChange} 
        placeholder="First Name" 
        value ={userComment.fname}/> <br/>

      <input 
        type="text" 
        id="lname"  
        name="lname" 
        onChange={handleImputChange} 
        placeholder="Last Name" 
        value ={userComment.lname}/><br/>

      <input 
        type="email" 
        id="email"  
        name="email" 
        onChange={handleImputChange} 
        placeholder="Email Address" 
        value ={userComment.email}/><br/>

      <input 
        type="tel" 
        id="phone" 
        name="phone" 
        onChange={handleImputChange} 
        placeholder="Phone" 
        value ={userComment.phone}/><br/>

      <textarea 
        id="message" 
        rows="8" 
        cols="80" 
        onChange={handleImputChange} 
        name="message" 
        placeholder="Enter your message for us here." 
        value ={userComment.message}></textarea>

      <div className="submit" onClick={submit}>
        Submit
      </div>
      </form>
    </div>
    </div>
  );
}

export default Contact;