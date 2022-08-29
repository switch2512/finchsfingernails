import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Pricing(props) {
    return (
      <div class='pricing'>
        <div class='price-container'>
          <div class='price-item'><h1>General Services</h1></div>
          <div class='price-item'><h1>Price</h1></div>
          <div class='price-item'><h2>Single Color Gels</h2></div>
          <div class='price-item'><h2>$15+</h2></div>
          <div class='price-item'><h2>Tips With Gel</h2></div>
          <div class='price-item'><h2>25+</h2></div>
          <div class='price-item'><h1>Additional Services</h1></div>
          <div class='price-item'><h1>Price</h1></div>
          <div class='price-item'><h2>Gel Removal</h2></div>
          <div class='price-item'><h2>$5+</h2></div>
          <div class='price-item'><h2>Add Design</h2></div>
          <div class='price-item'><h2>$5+</h2></div>
        </div>
      </div>
    );
  }
  
  export default Pricing;