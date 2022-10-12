import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import playButton from "../images/getItGooglePlay.svg";
import screenshot from "../images/playstore.png";
import bot from "../images/bot.gif";

export default function BotFeature() {
  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);
  return (
    <>
    <div>
    <h1 className='text-theme-dark text-4xl font-bold mt-5'style={{textAlign:'center'}}>FEATURES</h1>
    </div>
      <section
        id="header"
        className="d-flex align-items-center mt-5 mb-5"
        style={{
          backgroundColor: "#128C7E",
        }}
        data-aos="slide-up"
      >
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5  pt-lg-0 orer-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1 style={{ color: "white" }}>
                    Easiest way to shop online
                  </h1>
                  <h3 className="my-3 mt-4" style={{ color: "white" }}>
                    Shop the way you chat!!
                    <br></br></h3>
                  <h3 className="my-3 mt-4" style={{ color: "white" }}>  You can now shop online via our<br></br>
                  <span style={{color:'#33FD16'}}>
                    WhatsApp chatbot
                    </span>
                  </h3>
                  <p
                                        className="my-3 mt-4"
                                        style={{ color: "white" }}
                                    >
                                        Download Leegum app today and never wait for groceries again.
                                        <br></br>
                                        Hurry, we're going live in your city.


                                    </p>
                                    <a
                                        target="_blank"
                                        href="https://play.google.com/store/apps/details?id=com.orderandpickup.onp" rel="noreferrer"
                                    >
                                        <img
                                            src={playButton}
                                            style={{
                                                width: "182px",
                                                paddingTop: "20px",
                                                paddingBottom: "20px",
                                            }}
                                            alt=""
                                        />
                                    </a>

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
