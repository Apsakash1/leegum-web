import React from "react";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import playButton from "../images/getItGooglePlay.svg";
import screenshot from "../images/playstore.png";
import '../components/Playstorebanner.css';
export default function Playstorebanner() {
    useEffect(() => {
        Aos.init({ duration: 3000 });
    }, []);
    return (
        <>

            <section id="header" className="d-flex align-items-center " style={{
                backgroundColor: "bg-gray-100"
                // backgroundColor: "#96F69F"
               
            }}   
            // data-aos="slide-up"
            >
                <div className="container-fluid nav_bg" >
                    <div className="row banner">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div
                                  
                                    className="content col-md-6 pt-5 pt-lg-0 orer-2 order-lg-1 d-flex justify-content-center flex-column"
                                >
                                    <sharp>
                                    <h2 style={{ color: "#257425" }}>

                                      So, what are you waiting for? <br></br>


                                    </h2>
                                    </sharp>
                                    <sharp><p
                                        className="my-3 mt-4"
                                        style={{ color: "#257425" }}
                                    >
                                        Download Leegum app today and get first updates on all launch offers.
                                        <br></br>
                                        Hurry, we're going to launch very soon.
                                        {/* Download Leegum app today and never wait for groceries again.
                                        <br></br>
                                        Hurry, we're doing FREE delivery for a limited time. */}


                                    </p></sharp>
                                    <a
                                        target="_blank"
                                        href="https://play.google.com/store/apps/details?id=com.orderandpickup.onp"
                                    >
                                        <img
                                            src={playButton}
                                            className='play-button'
                                            style={{
                                                width: "182px",
                                                paddingTop: "20px",
                                                paddingBottom: "20px",
                                            }}
                                            alt=""
                                        />
                                    </a>


                                </div>


                                <div
                                    className="mobile col-lg-5 col-sm-app col-md-6 order-1 order-lg-2 header-img "


                                >
                                    <img
                                        src={screenshot}
                                        className="img-fluid sm:w-screen lg:w-screen screenshot"
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
}
