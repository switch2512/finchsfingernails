import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Navbar(props) {
    const navColor = props.navColor
    return (
      <div class='navbar' style={{backgroundColor:navColor, boxShadow:`0px 0px 5px 5px ${navColor}`}}>
        <button onClick={props.handleHome} type="button"><h2>Home</h2></button>
        <button onClick={props.handlePricing} type="button"><h2>Pricing</h2></button>
        <button onClick={props.handleSchedule} type="button"><h2>Schedule</h2></button>
        <button onClick={props.handleGallery} type="button"><h2>Gallery</h2></button>
        <button onClick={props.handleReviews} type="button"><h2>Reviews</h2></button>
      </div>
    );
  }
  
  export default Navbar;