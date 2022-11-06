import logo from "../images/Asset 1.png";
import {Link} from "react-scroll";
import Blog from '../components/Blog'
function CollapsibleExample() {
  return (
    <>
      <div className=" container-fluid nav_bg shadow ">
        <div className="row">
          <div className="mx-auto">
          <nav className="navbar navbar-expand-lg" style={{fontFamily: 'sans-serif'}}>
  <div className="container-fluid font-sans">
  <img src={logo} class="mb-2 md:mr-9 mr:4 h-9 md:h-11" alt="Flowbite Logo" />
    <Link className="navbar-brand font-bold" to="" spy={true} smooth={true} offset={50} duration={500} style={{color:'#82EB72'}}>
      
   
      LEEGUM</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
        <li className="nav-item font-semibold" style={{ paddingRight:'2rem'}}>
          <Link className="nav-link active" aria-current="page" to="/" spy={true} smooth={true} offset={50} duration={500}><a href="" style={{textDecoration:'none',color:'#82EB72'}}>ABOUT</a></Link>
        </li>
        <li className="nav-item font-semibold">
          <Link className="nav-link" to="features" spy={true} smooth={true} duration={500} style={{paddingRight:'2rem'}}><a href="" style={{textDecoration:'none', color:'grey'}}>FEATURES</a></Link>
        </li>
        {/* <li className="nav-item font-semibold">
          <Link className="nav-link" to="blog" spy={true} smooth={true} duration={500} style={{paddingRight:'2rem'}}><a href="" style={{textDecoration:'none', color:'grey'}}>BLOG</a></Link>
        </li> */}
        <li className="nav-item font-semibold">
          <Link className="nav-link" to="contact_us" spy={true} smooth={true} duration={500} style={{paddingRight:'2rem'}}><a href="" style={{textDecoration:'none', color:'grey'}}>CONTACT US</a></Link>
        </li>
        <Link className="nav-link" to="partner" spy={true} smooth={true} duration={500} >
        <button type="button" class="btn btn-default" style={{backgroundColor:'#82EB72',color:'white',width:'10rem', borderRadius:'5rem'}}>Partner with us
        </button>
        </Link>
      

    
      </ul>
      
    
      
    </div>
  </div>
</nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollapsibleExample;
