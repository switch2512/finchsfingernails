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
        <div class='pic-div'><img src={require('../pics/polish.jpg')} /></div>
        <div class='text-div'>
          <div class='subtext1'><h1>BOOK TODAY</h1></div>
          <div class='subtext2'>
            <h2>FINCH'S NAILS OFFERS A VARIETY OF MANICURE SERVICES RIGHT FROM THE COMFORT OF YOUR OWN DORM</h2>
            <p>NICOLE GIETZEN<br/>@finchs_fingernails</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Home;