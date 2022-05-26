import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Pricing(props) {
    return (
      <div class='pricing'>
        <img src={require('../pics/beautiful-point-loma.jpg')} />
        <div>
          <div class="splash-title">
            <h1>Pricing</h1>
          </div>
          <div class="body">
            <div class="title-row">
              <h2>General Services</h2>
            </div>
            <div class="row">
              <p>Single Color Gel: </p>
              <p>$15</p>
            </div>
            <div class="odd">
              <p>Tips with Gel:</p>
              <p>$25</p>
            </div>
            <div class="row">
              <br></br>
            </div>
            <div class="title-row2">
              <h2>Additional Services</h2>
            </div>
            <div class="row">
              <p>Gel Removal:</p>
              <p>$5</p>
            </div>
            <div class="odd footer">
              <p>Add Designs</p>
              <p>$5</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Pricing;