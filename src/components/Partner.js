import React,{Component} from 'react'
import img from '../images/ondc3.webp'
import step1 from '../images/step1.png'
import step2 from '../images/step2.png'
import step3 from '../images/step3.png'
import step4 from '../images/step4.png'
import step5 from '../images/step5.png'
import step6i from '../images/step6i.png'
import scooty_in_city from '../images/scooty_in_city.png'
import fill_form from '../images/fill_form.png'
import Modalform from '../components/Enquireform';
import Modal1 from './GoogleForm'
import '../components/Partner.css';


const Partner=()=> {
 
  return (
    <>
    <section id='partner'>
    <div class="accordion accordion-flush container-fluid mt-5" id="accordionFlushExample" style={{backgroundColor: '#35C342', paddingBottom:40}} >
    <div class="accordion-item">
      <h2 class="accordion-header" id="flush-headingOne">
        <button class="accordion-button collapsed accordian-btn" style={{backgroundColor: '#35C342', height:'100%',alignItems:'center', justifyContent:'center'}} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        <div className="col-10 mx-auto">
                <div className="row" style={{alignItems:'center', justifyContent:'center',}}>
                <h1 className='blink_me' 
                style={{fontSize: '5vh',color:'yellow'}}
                >
              ATTENTION SELLERS !!!
            </h1> 
            <h3 style={{color:'white'}}>Sell smartly with Leegum</h3>
            <p className='mt-2'style={{color:'white', fontSize:18}}>
            Unlock the full potential of <a href="https://ondc.org/">ONDC</a> for your business.<br/>
            <div className='mt-3'>
            <Modalform/>
            
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
     
          <h5 class="card-text font-semiboldt text-theme-green-dark">Fill the form</h5>
          <Modal1/>
        </div>
      </div>
      <div  class="col-md-6 col-sm-6 col-6">
        <img src={fill_form} class="img-fluid rounded-start" alt="..."/>
      </div>
      
    </div>
  </div>
        
      
      
  </div>
  
  <div class="max-w-sm" >
  <div class="card " style={{maxWidth: '450px'}}>
    <div class="row g-0" >
      <div  class="col-md-6 col-sm-6 col-6" style={{backgroundColor:'#6FF56F'}}>
        <img src={step6i} class="img-fluid" alt="..."/>
      </div>
      <div class="col-md-6 col-sm-6 col-6"style={{backgroundColor:'white'}}>
        <div class="card-body" >
          <h3 class="card-title mt-3 text-theme-green-dark font-bold">STEP 2</h3>
        
          <small class="card-text font-semibold text-theme-dark">Sit back and relax. Our team will contact you in 3 working days</small>
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
        <img src={scooty_in_city} class="img-fluid rounded-start" alt="..."/>
      </div>
      <div class="col-md-6 col-sm-6 col-6" style={{backgroundColor:'white'}}>
        <div class="card-body">
          <h3 class="card-title mt-3 font-bold text-theme-green-dark">STEP 3</h3>
    
          <small class="card-text font-semibold text-theme-dark">Build your inventory online and start selling</small>
        </div>
      </div>
    </div>
  </div>
    
  </div>
  </div>
  
                </div>
        </div>
        
        </div>
      
    
        </div>
        </div>
     
      </div>
        </div>
      </div>
    </section>
   
 


    </>
    
  )
}

export default Partner