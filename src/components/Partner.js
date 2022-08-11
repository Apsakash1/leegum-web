import React from 'react'
import img from '../images/ondc3.webp'
import step1 from '../images/step1.png'
import step2 from '../images/step2.png'
import step3 from '../images/step3.png'
import step4 from '../images/step4.png'
import step5 from '../images/step5.png'
import step6 from '../images/step6.png'

const Partner=()=> {
  return (
    <>
   <div class="accordion accordion-flush container-fluid nav_bg mt-5" id="accordionFlushExample" style={{backgroundColor: '#35C342'}} >
    
  <div class="accordion-item">
    <h2 class="accordion-header" id="flush-headingOne">
      <button class="accordion-button collapsed accordian-btn-color-primary" style={{backgroundColor: '#35C342', height:'100%',alignItems:'center', justifyContent:'center'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
      <div className="col-10 mx-auto">
              <div className="row" style={{alignItems:'center', justifyContent:'center',}}>
              <h1 style={{fontSize: '5vh',color:'white'}}>
            Partner with US
          </h1>
          <p className='mt-2'style={{color:'white'}}>
          If you are a seller Register your shop now on LEEGUM and recieve all ONDC orders. <a href='/' style={{textDecorationColor:'underline', color:'blue'}}>know more (talk to us?)</a>
          </p>
          
                </div>
                </div>
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample" style={{backgroundColor:'#35C342'}}>
      <div class="accordion-body"style={{backgroundColor:'#35C342'}}>
      <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full ">
    <div className="grid grid-cols-1  md:grid-cols-3 grid-flow-row gap-4" >
          
<div class="max-w-sm d-none d-md-block">
    <a href="#">
        <img class="rounded-t-lg" src={step1}  alt=""/>
    </a>
    
</div>

<div class="max-w-sm d-none d-md-block">
    <a href="#">
        <img class="rounded-t-lg" src={step2} alt=""/>
    </a>
  
</div>

<div class=" max-w-sm d-none d-md-block">
    <a href="#">
        <img class="rounded-t-lg" src={step3} alt=""/>
    </a>
  
</div>

              </div>
      </div>
      <div class="carousel-item  relative float-left w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4" >
          
<div class="max-w-sm">
    <a href="#">
        <img class="rounded-t-lg" src={step4}  alt=""/>
    </a>
    
</div>

<div class="max-w-sm">
    <a href="#">
        <img class="rounded-t-lg" src={step5} alt=""/>
    </a>
  
</div>

<div class=" max-w-sm">
    <a href="#">
        <img class="rounded-t-lg" src={step6} alt=""/>
    </a>
  
</div>

              </div>
      </div>
      </div>
      <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true" style={{backgroundColor:'#e1e1e1', borderRadius:'50%'}}></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleControls"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true" style={{backgroundColor:'#e1e1e1',borderRadius:'50%'}}></span>
    <span class="visually-hidden">Next</span>
  </button>
      </div>
      </div>
   
    </div>
      </div>
    </div>
 


    </>
    
  )
}

export default Partner;