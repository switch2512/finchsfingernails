import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Gallery() {
    return (
      <div class='gallery'>
        <div>
          <h1>Gallery</h1>
        </div>
        <div class="flex-gallery">
          <img src={require('../pics/beautiful-point-loma.jpg')} />
          <img src={require('../pics/beautiful-point-loma.jpg')} />
          <img src={require('../pics/beautiful-point-loma.jpg')} />
          <img src={require('../pics/beautiful-point-loma.jpg')} />
          <img src={require('../pics/beautiful-point-loma.jpg')} />
          <img src={require('../pics/beautiful-point-loma.jpg')} />
          <img src={require('../pics/beautiful-point-loma.jpg')} />
          <img src={require('../pics/beautiful-point-loma.jpg')} />
          <img src={require('../pics/beautiful-point-loma.jpg')} />
        </div>
      </div>
    );
  }
  
  export default Gallery;