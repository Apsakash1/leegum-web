import REact from 'react'
import '../components/SellerRedirection.css';

export default function SellerRedirection(){
    return(
        <>
     
        <div  className='seller'
        >
<div className="header-div col-md-6 col-sm-6 col-xs-8 justify-content-center " style={{}}>
<h1 className='header-text text-6xl ' style={{textAlign:'center',color:'white'}}>
Are you a Seller?
</h1>
<h1  className="sub-text text-4xl "style={{textAlign:'center',color:'white'}}>
Join us today and sell Online
</h1>


</div>
<div className="sub col-lg-6 col-xs-4 col-sm-6 mt-10 col-md-6 order-1 order-lg-2  justify-content-center flex-column" 
               >
          
                 <button className='seller-button bg-orange-500 text-white active:bg-orange-600 font-bold  px-6  shadow hover:shadow-lg outline-none' style={{borderRadius:'2rem'}} >PARTNER WITH US</button>
              
  
                  
                </div>

</div>
  
      
        </>
    )
}