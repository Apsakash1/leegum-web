import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import playButton from "../images/getItGooglePlay.svg";
import screenshot from "../images/playstore.png";

export default function Playstorebanner() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <>

            <section id="header" className="d-flex align-items-center mt-5 " style={{
                backgroundColor: "MediumSeaGreen"
               
            }}   data-aos="slide-up">
                <div className="container-fluid nav_bg" >
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div
                                  
                                    className="col-md-6 pt-5 pt-lg-0 orer-2 order-lg-1 d-flex justify-content-center flex-column"
                                >
                                    <h2 style={{ color: "white" }}>

                                        Hey, what are you waiting for? <br></br>


                                    </h2>
                                    <p
                                        className="my-3 mt-4"
                                        style={{ color: "white" }}
                                    >
                                        Download Leegum app today and never wait for groceries again.
                                        <br></br>
                                        Hurry, we're doing FREE delivery for a limited time.


                                    </p>
                                    <a
                                        target="_blank"
                                        href="https://play.google.com/store/apps/details?id=com.orderandpickup.onp"
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

                                {/* <div className="col-lg-6 order-1 order-lg-2 header-img">
                 
                
                </div> */}

                                <div
                                    className="col-lg-5 col-sm-app col-md-6 order-1 order-lg-2 header-img "


                                >
                                    <img
                                        src={screenshot}
                                        className="img-fluid sm:w-screen lg:w-screen"
                                        alt="home-img"
                                        style={{ marginLeft: "10vh" }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
