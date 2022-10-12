import logo from './logo.svg';
import './App.css';
import Navbar from '../src/components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
//import Desktop1_1 from './components/Desktop1_1';
//import Desktop1 from './components/Desktop1';
import Partner from './components/Partner';
import Playstorebanner from './components/Playstorebanner';
//import Form from './components/Form';
import Ondc from './components/Ondc';
import Blog from './components/Blog';
import BotFeature from './components/BotFeature';
import Footer from './components/Footer';

//import NavbarElement from './components/Navbar/NavbarElement'

function App() {
  return (
  <>
  <Navbar/>
  <Home/>
  <Partner/>
  <BotFeature/>
   {/* <Ondc/> */}

      <Blog/>
   
   <Playstorebanner/>
   <Footer/>
  {/* <Desktop1_1/>
  <Desktop1/> */}
  </>
  );
}

export default App;
