import React, { useState,useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import '../components/GoogleForm.css';
function Modal1() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    
    <button className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150" 
      onClick={handleShow} >
        Form
      </button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
           <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdRvkojp-eopwHU6TnOFDnJccJVgFtjmYaTmKyq_7FOt3R1_w/viewform?embedded=true" 
           width="100%" height="500" frameborder="0" marginheight="0" marginwidth="0"></iframe>
        </Modal.Body>
      </Modal>
     
       
         
           
        
        
      
    
   
   
</>
      );
    }
    export default Modal1;
          
        
