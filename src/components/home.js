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
        
      </div>
    );
  }
  
  export default Home;