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
                  
                  <h1 style={{fontSize : '7vh', color:'#595656'}}>
                    <strong>
                    Unlock the full potential of ONDC for your business                      {/* <span id="span1"></span> for text animation refer index.css */}
                    </strong>
                  </h1>
                  <h2 className="my-3 mt-4" style={{fontSize:'6vh',color:'#35C342'}}>
                    <strong>
                    Sell smartly with us
                      </strong></h2>
                  <h3 style={{fontSize:'3vh', color:'#595656'}}>
                    Shop directly from nearby stores.<br></br>Powered by ONDC
                  </h3>
                  <div className="mt-5 display-flex">
                   <button className="btn btn-default" style={{backgroundColor:'#35C342',color:'white'}}>Get Leegum App</button>
                   <button className="btn btn-default ml-3" style={{marginLeft:'2vh',borderColor:'#35C342'}}>Partner with us</button>
                   <div className="mt-3">
                   <p>Also available on</p>
                   <FontAwesomeIcon icon="fa-brands fa-apple" />
                   

                   </div>
                   
                  </div>
                </div>
                
                {/* <div className="col-lg-6 order-1 order-lg-2 header-img">
                 
                
                </div> */}
  
                <div className="col-lg-5 col-sm-app col-md-6 order-1 order-lg-2 header-img "data-aos="zoom-in"  style={{backgroundColor:'#82EB72',borderRadius:'50em 0em 50em 50em / 50em 0em 50em 50em ',  width:'30em'}}>
  
                  <img
                    src={screenshot}
                    className="img-fluid sm:w-screen lg:w-screen"
                    alt="home-img"
                    style={{marginLeft: '3vh'}}
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
              
                
   
      

