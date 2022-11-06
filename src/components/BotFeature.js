import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import playButton from "../images/getItGooglePlay.svg";
import whatsapp from "../images/whatsapp.svg"
import screenshot from "../images/playstore.png";
import bot from "../images/bot.gif";
// import {BsWhatsapp} from "react-icons/bs";

export default function BotFeature() {
  // useEffect(() => {
  //   Aos.init({ duration: 3000 });
  // }, []);
  return (
    <>
    <div id="features" style={{marginBottom:-48, paddingTop:40, backgroundColor: "#76FE84"  }}>
    <h1 className='text-theme-dark text-4xl font-bold mt-5'style={{textAlign:'center', backgroundColor: "#76FE84", color:'black'}}>FEATURES</h1>
    </div>
      <section
        id="header"
        className="d-flex align-items-center mt-5"
        style={{
          backgroundColor: "#76FE84",
          // previous teal-ish colour 128C7E
        }}
        // featdata-aos="slide-up"
      >
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5  pt-lg-0 orer-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 style={{ color: "black" }}>
                    Everything is better on WhatsApp
                  </h1>
                  {/* Easiest way to shop online */}
                  <h3 className="my-3 mt-4" style={{ color: "black" }}>
                    Shop the way you chat!!
                    <br></br></h3>
                  {/* ‎  is for Empty Space */}
                  <h3 className="my-3 mt-4" style={{ color: "black" }}>  You will soon be able to shop online <br></br>
                  via our ‎ 
                  <span style={{color:'white'}}>
                      WhatsApp chatbot <br></br>
                  </span>
                  </h3>
               
                  
                  
                  <div className="flex align-items-center mt-4">
                  <a
                      target="_blank"
                      href="https://wa.me/918349318108?text=Hi,"
                  >
                      <img
                          src={whatsapp}
                          style={{
                              width: "80px",
                              paddingTop: "20px",
                              paddingBottom: "20px",
                          }}
                          alt=""
                      />
                  </a>
                  &nbsp;<h2 style={{color:"black"}}><a target="_blank" style={{color:"inherit"}} href="https://wa.me/918349318108?text=Hi,">Chat with US!!</a></h2>
                  </div>
                 
                </div>

                <div className="col-lg-5 col-sm-app col-md-6 order-1 order-lg-2 header-img ">
                  <div style={{width:"100%",height:"0",paddingBottom:"130%",position:"relative"}}>
                  <img src={bot} style={{width: "100%", maxWidth: "100%", height: "auto", marginLeft:"6vh"}} alt="gif"/>
                    </div> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
                  
            



  );
}
                
