import { Button } from "bootstrap";
import React from "react";
import screenshot from "../images/home_screen.png";
//import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
// import './About.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import '../index.css';
import {Circle} from 'react-awesome-shapes';
import Aos from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from "react";
import '../components/Home.css';
import { Link } from "react-scroll";
const Home = () => {
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
        
                <div data-aos="slide-up" className="col-md-6 pt-5 pt-lg-0 orer-2 order-lg-1 d-flex justify-content-center flex-column">
                  
                  <h2 style={{fontSize : '7vh', color:'#595656'}}>
                    <strong>
                   No.1 Platform to order                    
                    </strong>
                  </h2>
                  <strong><span id="span1" style={{color:"#595656"}}></span></strong>

                  <h2 className="my-3 mt-4" style={{fontSize:'6vh',color:'#35C342'}}>
                  
                  Your nearby local stores <br></br>now online
                    </h2>
                  <h3 className="mt-3"style={{fontSize:'3vh', color:'#595656'}}>
                    Shop on whatsapp.<br></br>Powered by ONDC
                  </h3>
                  <div className="mt-5 display-flex">
                   <a href="https://play.google.com/store/apps/details?id=com.orderandpickup.onp" target="_blank">
                   <button className="btn btn-default" style={{backgroundColor:'#35C342',color:'white'}}>Get Leegum App</button>
                    </a>
                   &nbsp;&nbsp;
                   <button className="btn btn-default" style={{borderColor:'#35C342'}}>
                    <Link className="nav-link" to="partner" spy={true} smooth={true} duration={500}>
                      <a href="" style={{textDecoration:'none', color:'#35C342'}}>
                        Partner with US</a></Link>
                   </button>
                   <div className="mt-3">
                   {/* <p>Also available on</p> */}
                   <FontAwesomeIcon icon="fa-brands fa-apple" />
                   

                   </div>
                   
                  </div>
                </div>
                
                {/* <div className="col-lg-6 order-1 order-lg-2 header-img">
                 
                
                </div> */}
  
                <div className="col-lg-5 col-sm-app col-md-6 order-1 order-lg-2 header-img"data-aos="zoom-in"  
                style={{backgroundColor:'#82EB72',borderRadius:'50em 0em 50em 50em / 50em 0em 50em 50em ',  width:'30em'}}>
  
                  <img
                    src={screenshot}
                    className="img-fluid sm:w-screen lg:w-screen ml-3"
                    alt="home-img"
                    
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
              
                
   
      

