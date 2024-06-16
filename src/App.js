import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
//import Desktop1_1 from './components/Desktop1_1';
//import Desktop1 from './components/Desktop1';
import Partner from './components/Partner';
import Playstorebanner from './components/Playstorebanner';
import Ondc from './components/Ondc';
import Blog from './components/Blog';
import BotFeature from './components/BotFeature';
import Footer from './components/Footer';
import New from './components/new';
import Modal2 from './components/Form';

//import NavbarElement from './components/Navbar/NavbarElement'
import {createRoot} from 'react-dom/client';

import {BrowserRouter as Router} from 'react-router-dom';
import OfferBanner from './components/OfferBannet';
import SellerRedirection from './components/SellerRedirection';
import Category from './components/Category';
import Shop from './components/Shopd';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
function App() {
  return (
  <>
  <Navbar/>
  <Home/>
  <OfferBanner/>
  {/* <Partner/> */}
  <SellerRedirection/>
  <Category/>
  <Shop/>
  {/* <BotFeature/>
  <Playstorebanner/> */}
  {/* <New/> */}
   {/* <Ondc/> */}

      {/* <Blog/> */}
   {/* <Modal2/> */}
   <Footer/>
  {/* <Desktop1_1/>
  <Desktop1/> */}

  </>
 
  );
}

export default App;
