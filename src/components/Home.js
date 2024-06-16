import { Button } from "bootstrap";
import React from "react";
import {useState} from 'react';
import screenshot from "../images/delivery_vector.png";
//import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
// import './About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../index.css';
import {Circle} from 'react-awesome-shapes';
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import '../components/Home.css';
import '../components/Seller.js';
import {Routes, Route, useNavigate, NavLink} from 'react-router-dom';
import { Link } from "react-scroll";
const Home = () => {
  
  // const navigate = useNavigate();

  // const navigateToSeller = () => {
  //   // 👇️ navigate to /seller
  //   navigate('/seller');
  // };
    const [isHovering, setIsHovering] = useState(false);
  
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  
  // const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  // const FadeUp = batch(Fade(), Move(), Sticky());
  useEffect(()=>{
    Aos.init({ duration: 2000});
  },[]);
  return (
    <>
      <section  id="header" className="d-flex align-items-center ">
        
        <div className="container-fluid nav_bg"style={{overflowX:'hidden'}}>
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row" >
        
                <div data-aos="slide-up" className="col-md-6 pt-5  d-flex justify-content-center flex-column home">
                  
                  <h1 onMouseOver={handleMouseOut} style={{color:'#595656'}}>
                    <strong>
                     Local Kirana Stores            
                    </strong>
                  </h1>
                  {/* Grey colour used previously here was: 595656 */}
                  <h2 className="text-content" style={{ color:'#595656'}}>
                 
                     Now at your <br></br>
                     <span style={{color:'#1FC205'}}>Doorsteps</span>               
                    
                  </h2>
                 
                  {isHovering &&
                    <strong><span id="span1" onMouseOut={handleMouseOut} style={{color:"#000000"}}></span></strong>
                  }
                  {/* <h2 className="my-3 mt-4" style={{fontSize:'6vh',color:'#35C342'}}> */}
                  {/* Your nearby local stores <br></br>now online */}
                  <h2 onMouseOver={handleMouseOut} className="my-3 content" style={{color:'#595656'}}>
                  Shop grocery directly from your near by kirana store. <br></br>
                  </h2>
                  <h3 onMouseOver={handleMouseOut} className=" sub-content"style={{ color:'#595656'}}>
                  Powered by ONDC.
                  </h3>
                  <div className="mt-4 pb-5 app-button">
                   <a href="https://play.google.com/store/apps/details?id=com.orderandpickup.onp" target="_blank">
                   <button className="btn btn-default  mr-2" style={{backgroundColor:'#35C342',color:'white'}}>Get Leegum App</button>
                    </a>
                   
                   <button className="btn btn-default "  style={{borderColor:'#35C342'}}>
                    <Link className="nav-link" to={'/Seller'} spy={true} smooth={true} duration={500}>
                      <a href="" style={{textDecoration:'none', color:'#35C342'}}>
                        Partner with US</a>
                        </Link>
                   </button>
                      
                  
                   
                    
    
                   
                  </div>
                </div>
                
                {/* <div className="col-lg-6 order-1 order-lg-2 header-img">
                 
                
                </div> */}
  
                <div className="col-lg-5 col-sm-app col-md-6 order-1 order-lg-2 header-img"data-aos="zoom-in"  
               >
  
                  <img
                    src={screenshot}
                    className="img-fluid sm:w-screen lg:w-screen ml-3"
                    alt="home-img"
                    // style={{height:'28em',minWidth:'100'}}
                    
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Home;
              
                
   
      

