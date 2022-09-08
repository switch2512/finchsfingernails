import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Schedule(props) {
    return (
      <div class='schedule'>
        <img src={require('../pics/beach_picture.jpg')} />
        <iframe class="sign-up-form" src="https://docs.google.com/forms/d/e/1FAIpQLSdyz8qNGjWLTVAlytnm_x2J_xkaxC17uz6lEPdz2TuzGaSdzQ/viewform?embedded=true"  frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      </div>
    );
  }
  
  export default Schedule;