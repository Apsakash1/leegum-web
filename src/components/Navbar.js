import logo from "../images/Asset 1.png";

function CollapsibleExample() {
  return (
    <>
      <div className=" container-fluid nav_bg shadow ">
        <div className="row">
          <div className="mx-auto">
          <nav className="navbar navbar-expand-lg" style={{fontFamily: 'sans-serif'}}>
  <div className="container-fluid font-sans">
  <img src={logo} class="mb-2 md:mr-9 mr:4 h-9 md:h-11" alt="Flowbite Logo" />
    <a className="navbar-brand font-bold" href="/" style={{color:'#82EB72'}}>
      
   
      LEEGUM</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0" >
        <li className="nav-item font-semibold" style={{ paddingRight:'2rem'}}>
          <a className="nav-link active" aria-current="page" href="/" style={{color:'#82EB72'}}>ABOUT</a>
        </li>
        <li className="nav-item font-semibold">
          <a className="nav-link" href="/" style={{paddingRight:'2rem'}}>ONDC</a>
        </li>
        <li className="nav-item font-semibold">
          <a className="nav-link" href="/" style={{paddingRight:'2rem'}}>BLOG</a>
        </li>
        <li className="nav-item font-semibold">
          <a className="nav-link" href="/" style={{paddingRight:'2rem'}}>CONTACT US</a>
        </li>
        <button type="button" class="btn btn-default" style={{backgroundColor:'#82EB72',color:'white',width:'10rem', borderRadius:'5rem'}}>Partner with us</button>

    
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
