import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Home(props) {
    return (
      <div class='home'>
        <img src={require('../pics/finch-courtyard.jpg')} />
        <div class='splash-title'>
          <h1>Home</h1>
        </div>
        <div class="splash-flex">
          <div class="hidden-splash">
            <h2>Bio</h2>
            <p>In her spare time Nicole likes to fart and pass gas to excess.</p>
          </div>
          <img src={props.nav} />
        </div>
      </div>
    );
  }
  
  export default Home;