import React from "react";
import shop1 from "../images/Shop1.png"
import shop2 from "../images/Shop2.png"
import shop3 from "../images/Shop3.png"
import '../components/Shops.css';

export default function Shop(){
    return (
        <>
        <div>
         <h1 className="heading" style={{color:'#484646'}}>Shops Near You</h1> 
        </div>
    
<div class="card-deck-div" >
   <div className="container border-2">
      <div className="container-img">
        <img src={shop1}></img>
      </div>
      <div className="content-div">
       <h2>ABC Kirana Store</h2>
       <p className="address ">address and phone number blah blah</p>
      </div>
       <div className="footer d-flex row">
       <div className="col-9 col-xl-10">
       <p className="items">Groceries, Dairy<br></br>3Km</p>
      </div> 
        <div className="col-3 col-xl-2 rating ">
        <h6 style={{backgroundColor:'#126A04',color:'white'}}>4 *</h6>
          </div> 
       </div>
    
   </div>

   <div className="container border-2">
      <div className="container-img">
        <img src={shop2}></img>
      </div>
      <div className="content-div">
       <h2>ABC Kirana Store</h2>
       <p className="address ">address and phone number blah blah</p>
      </div>
       <div className="footer d-flex row">
       <div className="col-9 col-xl-10">
       <p className="items">Groceries, Dairy<br></br>3Km</p>
      </div> 
        <div className="col-3 col-xl-2 rating ">
        <h6 style={{backgroundColor:'#126A04',color:'white'}}>4 *</h6>
          </div> 
       </div>
    
   </div>

   <div className="container border-2">
      <div className="container-img">
        <img src={shop3}></img>
      </div>
      <div className="content-div">
       <h2>ABC Kirana Store</h2>
       <p className="address ">address and phone number blah blah</p>
      </div>
       <div className="d-flex footer row">
       <div className="col-9 col-xl-10">
       <p className="items">Groceries, Dairy<br></br>3Km</p>
      </div> 
        <div className="col-3 col-xl-2 rating ">
        <h6 style={{backgroundColor:'#126A04',color:'white'}}>4 *</h6>
          </div> 
       </div>
    
   </div>

   

  
  
</div>

<div class="card-deck-div" >
   <div className="container border-2">
      <div className="container-img">
        <img src={shop2}></img>
      </div>
      <div className="content-div">
       <h2>ABC Kirana Store</h2>
       <p className="address ">address and phone number blah blah</p>
      </div>
       <div className="d-flex footer row">
       <div className="col-9 col-xl-10">
       <p className="items">Groceries, Dairy<br></br>3Km</p>
      </div> 
        <div className="col-3 col-xl-2 rating ">
        <h6 style={{backgroundColor:'#126A04',color:'white'}}>4 *</h6>
          </div> 
       </div>
    
   </div>

   <div className="container border-2">
      <div className="container-img">
        <img src={shop1}></img>
      </div>
      <div className="content-div">
       <h2>ABC Kirana Store</h2>
       <p className="address ">address and phone number blah blah</p>
      </div>
       <div className="d-flex footer row">
       <div className="col-9 col-xl-10">
       <p className="items">Groceries, Dairy<br></br>3Km</p>
      </div> 
        <div className="col-3 col-xl-2 rating ">
        <h6 style={{backgroundColor:'#126A04',color:'white'}}>4 *</h6>
          </div> 
       </div>
    
   </div>

   <div className="container border-2">
      <div className="container-img">
        <img src={shop3}></img>
      </div>
      <div className="content-div">
       <h2>ABC Kirana Store</h2>
       <p className="address ">address and phone number blah blah</p>
      </div>
       <div className="d-flex footer row">
       <div className="col-9 col-xl-10">
       <p className="items">Groceries, Dairy<br></br>3Km</p>
      </div> 
        <div className="col-3 col-xl-2 rating ">
        <h6 style={{backgroundColor:'#126A04',color:'white'}}>4 *</h6>
          </div> 
       </div>
    
   </div>

   

  
  
</div>


        </>
    )
}