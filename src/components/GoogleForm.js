import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { MDBIcon } from 'mdb-react-ui-kit';


import '../components/Partner.css';
export default function Modal1() {
    const [showModal, setShowModal] = React.useState(false);
  
  

 
  return (
    <> 
    <div className=" w-50 d-flex">
    <button
        className="bg-orange-500 text-white active:bg-orange-600 font-bold uppercase text-sm px-6 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Form
      </button>
   
      
    </div>
     
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
               
            
                <div className="p-3 flex-auto wrapper" style={{position:'relative',overflow:'hidden', paddingBottom:'56.25%'}}>
                   <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfoFL0UUuttd64GMPZNQd5A5_VprOthZgvRzBLG6CtIrzaZqg/viewform?embedded=true" 
                  overflow="hidden" position="absolute" top="0" left="0" width="100%"  height="500" frameborder="0" marginheight="0" marginwidth="0" >Loading…</iframe>
                  
                </div>

                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                 
                </div>
              </div>
            </div>
          </div>
         
        </>
      ) : null}
    </>
  );
}