import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar'
import Home from './components/home'
import Pricing from './components/pricing'
import Schedule from './components/schedule';
import Gallery from './components/gallery';
import Reviews from './components/reviews'
import Footer from './components/footer'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
/* import {} from "@fortawesome/free-brands-svg-icons" */
import { faBars, faX } from "@fortawesome/free-solid-svg-icons"

function App() {
  const [nav, setNav] = useState(<Home />);
  const [navColor, setNavColor] = useState('#BBEDB5');
  const [menuIcon, setMenuIcon] = useState(faBars);
  const [menuOpen, setMenuOpen] = useState(false)

  const handleHome  = () => {
    setNav(<Home />)
    setNavColor('#BBEDB5')
    if (menuOpen) {
      handleMenuClick()
    }
  }

  const handlePricing = () => {
    setNav(<Pricing />)
    setNavColor('#ECBEFD')
    handleMenuClick()
  }

  const handleSchedule = () => {
    setNav(<Schedule />)
    setNavColor('#96D6F7')
    handleMenuClick()
  }

  const handleGallery = () => {
    setNav(<Gallery />)
    setNavColor('#FFEE8A')
    handleMenuClick()
  }

  const handleReviews = () => {
    setNav(<Reviews />)
    handleMenuClick()
  }

  const handleMenuClick = () => {
    console.log(menuOpen) 
    if (menuOpen) {
      document.getElementById('navbar-small').style.left='-50%';
      setMenuIcon(faBars);
      setMenuOpen(false)
      console.log(menuOpen)
    }
    else if (!menuOpen) {
      document.getElementById('navbar-small').style.left='0px';
      setMenuIcon(faX);
      setMenuOpen(true)
      console.log(menuOpen)
    }
    console.log(menuOpen)
  }
  return (
    <div>
      <Navbar handleMenuClick={handleMenuClick} menuIcon={menuIcon} navColor={navColor} handleHome={handleHome} handlePricing={handlePricing} handleSchedule={handleSchedule} handleGallery={handleGallery} handleReviews={handleReviews} />
      {nav}
    </div>
  );
}

export default App;
