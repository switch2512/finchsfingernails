import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
/* import {} from "@fortawesome/free-brands-svg-icons" */
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"

function Navbar(props) {
    const navColor = props.navColor

    return (
      <div class='navbars-container'>
        <div class='navbar'>
          <button onClick={props.handleHome} type="button"><h2>HOME</h2></button>
          <button onClick={props.handlePricing} type="button"><h2>PRICING</h2></button>
          <img src={require('../pics/logo7.png')} onClick={props.handleHome}/>
          <button onClick={props.handleSchedule} type="button"><h2>SCHEDULE</h2></button>
          <button onClick={props.handleGallery} type="button"><h2>GALLERY</h2></button>
        </div>
        <button id="menu-small" onClick={props.handleMenuClick}><FontAwesomeIcon id="menu-icon" icon={props.menuIcon} /></button>
        <div id='navbar-small'>
          <button onClick={props.handleHome} type="button"><h2>HOME</h2></button>
          <button onClick={props.handlePricing} type="button"><h2>PRICING</h2></button>
          <button onClick={props.handleSchedule} type="button"><h2>SCHEDULE</h2></button>
          <button onClick={props.handleGallery} type="button"><h2>GALLERY</h2></button>
        </div>
        <img class='logo-small'src={require('../pics/logo7.png')} onClick={props.handleHome}/>
      </div>
    );
  }
  
  export default Navbar;