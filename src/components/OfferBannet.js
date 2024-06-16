import React from 'react'
import banner from "../images/banner12.svg";
import banner1 from "../images/banner.png";

export default function OfferBanner(){
    return(
        <>
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={banner1} class="d-block w-100 mx-auto" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner1} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={banner1} class="d-block w-100" alt="..."/>
    </div>
  </div>
</div>
</>
    )
}