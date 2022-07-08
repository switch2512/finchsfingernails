import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Home(props) {
  const [moveUpToggle, setMoveUpToggle] = useState([true, 'visible', 'translateY(200%)']);
  
    const handleMoveUp = () => {
      if (moveUpToggle[0]) {
        setMoveUpToggle([false, 'hidden', 'translateY(-75%)']);
        console.log(moveUpToggle[0])
      } else if (!moveUpToggle[0]) {
        setMoveUpToggle([true, 'visible', 'translateY(200%)']);
        console.log(moveUpToggle[0])
      } else {
        console.log('error')
      }
    }
    return (
      <div class='home'>
        <img src={require('../pics/finch-courtyard.jpg')} />
        <div class='splash-title' style={{visibility: moveUpToggle[1]}}>
          <h1>Finch's Fingernails</h1>
        </div>
        <button onClick={handleMoveUp}><strong>I'm a button</strong></button>
        <div class="splash-flex" style={{transform: moveUpToggle[2], transition: '2s'}}>
            <img src={require("../pics/balloon.png")}/>
          <div class="hidden-splash">
            <h2>Bio</h2>
            <p><strong>Nicole is a woman and a college student. She currently works and studies. In her spare time Nicole likes to rip farts and pass gas to excess.</strong></p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;