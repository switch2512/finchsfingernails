import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

function Home(props) {
  const [moveUpToggle, setMoveUpToggle] = useState([true, 'visible', '125%', 'none']);
  
    const handleMoveUp = () => {
      if (moveUpToggle[0]) {
        setMoveUpToggle([false, 'hidden', '35%', 'inline']);
        console.log(moveUpToggle[0])
      } else if (!moveUpToggle[0]) {
        setMoveUpToggle([true, 'visible', '125%', 'none']);
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
        <button onClick={handleMoveUp}>I'm a button</button>
        <div class="splash-flex" style={{top: moveUpToggle[2], transition: '2s'}}>
            <img src={require("../pics/balloon.png")}/>
          <div class="hidden-splash">
            <h2>Bio</h2>
            <p>Nicole is a woman and a college studnet. She currently works and studies. In her spare time Nicole likes to rip farts and pass gas to excess.</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;