import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar'
import Home from './components/home'
import Pricing from './components/pricing'
import Schedule from './components/schedule';
import Gallery from './components/gallery';
import Reviews from './components/reviews'
import Footer from './components/footer'

function App() {
  const [nav, setNav] = useState(<Home />);
  const [navColor, setNavColor] = useState('#BBEDB5')

  const handleHome  = () => {
    setNav(<Home />)
    setNavColor('#BBEDB5')
  }

  const handlePricing = () => {
    setNav(<Pricing />)
    setNavColor('#ECBEFD')
  }

  const handleSchedule = () => {
    setNav(<Schedule />)
  }

  const handleGallery = () => {
    setNav(<Gallery />)
  }

  const handleReviews = () => {
    setNav(<Reviews />)
  }
  return (
    <div>
      <Navbar navColor={navColor} handleHome={handleHome} handlePricing={handlePricing} handleSchedule={handleSchedule} handleGallery={handleGallery} handleReviews={handleReviews} />
      {nav}
    </div>
  );
}

export default App;
