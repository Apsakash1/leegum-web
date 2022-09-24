import React from 'react'
import step1 from '../images/step1.png'
export default function Horizontal() {
  return (
    <>
    <div class="card mb-3" style={{maxWidth: '450px'}}>
  <div class="row no-gutters">
    <div class="col-md-6 col-sm-6 col-6">
      <img src={step1} class="img-fluid" alt="..."/>
    </div>
    <div class="col-md-6 col-sm-6 col-6">
      <div class="card-body">
        <h5 class="card-title mt-3">STEP 1</h5>
        <p class="card-text"></p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>


    </>

  )
}
