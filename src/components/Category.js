import React from "react";
import grocery from "../images/grocery.png"
import dairy from "../images/dairy.png"
import medical from "../images/medical1.png"
import '../components/Category.css';



export default function Category(){
    return(

        <>
        <div>
         <h1 className="category-text" style={{color:'#484646'}}>Explore By Categories</h1> 
        </div>
        <div class="card-deck">
  <div class="border-0 card  ">
    <img src={grocery} class="card-img-top border shadow" alt="..."/>
    <div class="card-body-text">
      <h5 class="card-title">GORCERIES</h5>
    </div>
  </div>
  <div class=" border-0 card ">
    <img src={dairy} class="card-img-top border shadow" alt="..."/>
    <div class="card-body-text">
      <h5 class="card-title">DAIRY</h5>
    </div>
  </div>
  <div class="card  border-0">
    <img src={medical} class="card-img-top border shadow" alt="..."/>
    <div class="card-body-text">
      <h5 class="card-title">MEDICAL</h5>
    </div>
  </div>
 
</div>
        </>
    )
}