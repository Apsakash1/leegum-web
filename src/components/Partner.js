import React,{Component} from 'react'
import img from '../images/ondc3.webp'
import step1 from '../images/step1.png'
import step2 from '../images/step2.png'
import step3 from '../images/step3.png'
import step4 from '../images/step4.png'
import step5 from '../images/step5.png'
import step6 from '../images/step6.png'
import Modal from '../components/Enquireform';
import '../components/Partner.css';


const Partner=()=> {
  const cardStyle ={
    position:'absolute',
    right:'70vh',
    left:'38vh',
    bottom:'15vh',
    '@media (max-width: 600px)': {
      position:'absolute',
      right:'70vh',
      left:'38vh',
      bottom:'15vh',
    },
    '@media (min-width: 600px)': {
      position:'absolute',
      right:'70vh',
      left:'38vh',
      bottom:'15vh',
      fontSize:'2rem'
    },
  }
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
          <div className='mt-3'>
          <Modal/>
          
          </div>
         
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
          
<div class="max-w-sm ">
  
    <div class="card " style={{maxWidth: '450px'}}>
  <div class="row g-0" >
  <div class="col-md-6 col-sm-6 col-6">
      <div class="card-body">
        <h3 class="card-title mt-3 font-bold text-theme-green-base">STEP 1</h3>
   
        <h5 class="card-text font-semiboldt text-theme-green-dark">Install Leegum Dukaan App from Play store</h5>
      </div>
    </div>
    <div  class="col-md-6 col-sm-6 col-6">
      <img src={step1} class="img-fluid rounded-start" alt="..."/>
    </div>
    
  </div>
</div>
      
    
    
</div>

<div class="max-w-sm" >
<div class="card " style={{maxWidth: '450px'}}>
  <div class="row g-0" >
    <div  class="col-md-6 col-sm-6 col-6">
      <img src={step2} class="img-fluid" alt="..."/>
    </div>
    <div class="col-md-6 col-sm-6 col-6"style={{backgroundColor:'#82EB72'}}>
      <div class="card-body" >
        <h3 class="card-title mt-3 text-theme-green-dark font-bold">STEP 2</h3>
      
        <h5 class="card-text font-semibold"><small class="text-theme-dark">Click on Detect Location button to automatically fill in your shop’slocation details.</small></h5>
      </div>
    </div>
  </div>
</div>
  
</div>

<div class=" max-w-sm">
<div class="max-w-sm">
<div class="card " style={{maxWidth: '450px'}}>
  <div class="row g-0" >
    <div  class="col-md-6 col-sm-6 col-6">
      <img src={step3} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-6 col-sm-6 col-6" style={{backgroundColor:'#82EB72'}}>
      <div class="card-body">
        <h3 class="card-title mt-3 font-bold text-theme-green-dark">STEP 3</h3>
  
        <h5 class="card-text"><small class="font-semibold text-theme-dark">Enter the required details of your Shop</small></h5>
      </div>
    </div>
  </div>
</div>
  
</div>
</div>

              </div>
      </div>
      <div class="carousel-item  relative float-left w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-4" >
          
<div class="max-w-sm">
<div class="max-w-sm">
<div class="card " style={{maxWidth: '450px'}}>
  <div class="row g-0" >
    <div  class="col-md-6 col-sm-6 col-6">
      <img src={step4} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-6 col-sm-6 col-6"style={{backgroundColor:'#82EB72'}}>
      <div class="card-body">
        <h3 class="card-title mt-3 font-bold text-theme-green-dark">STEP 4</h3>
       
        <h5 class="card-text"><small class="text-theme-dark font-semibold">Upload the clear image of front of your Shop</small></h5>
      </div>
    </div>
  </div>
</div>
  
</div>
    
</div>

<div class="max-w-sm">
<div class="max-w-sm">
<div class="card " style={{maxWidth: '450px'}}>
  <div class="row g-0" >
    <div  class="col-md-6 col-sm-6 col-6">
      <img src={step5} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-6 col-sm-6 col-6">
      <div class="card-body">
        <h3 class="card-title  text-theme-green-base font-bold">STEP 5</h3>
      
        <h5 class=" font-semibold  card-text text-theme-green-dark">Add your products from a list of over 1000+ categories</h5>
      
              
      </div>
    </div>
  </div>
</div>
  
</div>
  
</div>

<div class=" max-w-sm">
<div class="max-w-sm">
<div class="card " style={{maxWidth: '450px'}}>
  <div class="row g-0" >
    <div  class="col-md-6 col-sm-6 col-6">
      <img src={step6} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-6 col-sm-6 col-6">
      <div class="card-body">
        <h3 class="card-title font-bold text-theme-green-base">STEP 6</h3>
        <small>
        <h5 class="card-text font-semibold text-theme-green-dark">Start Selling</h5>
      <p className="text-theme-green-base font-semibold">Your online dukaan is ready.<span className='text-theme-dark'>Download the <a href='#' className='text-theme-green-base'>Leegum Dukaan</a> app now</span> </p>
          </small>
       
      </div>
    </div>
  </div>
</div>
  
</div>
  
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

export default Partner