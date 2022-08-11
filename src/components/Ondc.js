import ondc from "../images/ondc3.webp";
import React,{useEffect} from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function App() {
	useEffect(()=>{
		Aos.init({ duration: 2000});
		},[]);
  return (

    <>
      {/* <section id="experience" class="">
	  <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
		
	<div class="max-w-5xl mx-auto px-6 lg:px-0 mt-5">
			
			<header class="mb-16">
			  <h3 class="text-3xl font-poppins text-theme-gray-light font-extrabold">
				<span class="text-theme-green-base text-base mr-3">01.</span>
				<span class=" text-theme-green-base font-bold">
				  ONDC for buyers
				</span>
			  </h3>
			</header>
  
			
			<div class="flex flex-wrap items-center mb-6 sm:mb-32">
			  <div
				class="w-full sm:w-3/5 mb-4 sm:mb-0"
				style={{
				  borderColor: "black",
				  justifyContent: "center",
				  justifyItems: "center",
				}}
			  >
				<img
				  alt=""
				  className="mx-auto"
				  src={ondc}
				  style={{ justifyContent: "center", justifyItems: "center" }}
				  class="rounded shadow"
				/>
			  </div>
			  <div class="w-full sm:w-2/5">
				  
				<div class="text-right mb-4">
				
				  <p class="text-theme-aquamarine text-sm font-poppins">ONDC </p>
  
				  <h4 class="text-theme-green-base text-2xl font-poppins font-extrabold">
					Buyers
				  </h4>
				  
				</div>
				<div class="bg-theme-green-base rounded p-6 shadow-xl ml-0 sm:-ml-16 mb-6">
				  
				<p class="text-theme-gray-deep leading-relaxed">
						  Lorem ipsum dolor sit amet, consectetur adipisicing
						  elit. Corporis eum nulla possimus velit voluptates?
						  Accusantium animi dolorem est quia tempora?
						</p>
				  
				</div>
				<div class="text-right">
				  <div class="flex justify-end mb-6">
					<span class="text-theme-gray-deep text-xs mr-2">
					  <a href="/" style={{ color: "blue" }}>
						Know more(detailed blog link)
					  </a>
					</span>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>


		<div class="carousel-item  relative float-left w-full">
	<div class="max-w-5xl mx-auto px-6 lg:px-0 mt-5">
			
			<header class="mb-16">
			  <h3 class="text-3xl font-poppins text-theme-gray-light font-extrabold">
				<span class="text-theme-green-base text-base mr-3">02.</span>
				<span class=" text-theme-green-base font-bold">
				  ONDC for sellers
				</span>
			  </h3>
			</header>
  
	
			<div class="flex flex-wrap items-center mb-6 sm:mb-32">
			  <div
				class="w-full sm:w-3/5 mb-4 sm:mb-0"
				style={{
				  borderColor: "black",
				  justifyContent: "center",
				  justifyItems: "center",
				}}
			  >
				<img
				  alt=""
				  className="mx-auto"
				  src={ondc}
				  style={{ justifyContent: "center", justifyItems: "center" }}
				  class="rounded shadow"
				/>
			  </div>
			  <div class="w-full sm:w-2/5">
				  
				<div class="text-right mb-4">
				
				  <p class="text-theme-aquamarine text-sm font-poppins">ONDC </p>
  
				  <h4 class="text-theme-green-base text-2xl font-poppins font-extrabold">
					Sellers
				  </h4>
				  
				</div>
				<div class="bg-theme-green-base rounded p-6 shadow-xl ml-0 sm:-ml-16 mb-6">
				  
				<p class="text-theme-gray-deep leading-relaxed">
						  Lorem ipsum dolor sit amet, consectetur adipisicing
						  elit. Corporis eum nulla possimus velit voluptates?
						  Accusantium animi dolorem est quia tempora?
						</p>
				  
				</div>
				<div class="text-right">
				  <div class="flex justify-end mb-6">
					<span class="text-theme-gray-deep text-xs mr-2">
					  <a href="/" style={{ color: "blue" }}>
						Know more(detailed blog link)
					  </a>
					</span>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
		</div>

		</div>
		</div>

     
      </section> */}


{/* selective carousel */}

	  <section id="experience" class="">
	  <div class="max-w-5xl mx-auto px-6 lg:px-0 mt-5">
			
			<header  class="mb-16" data-aos ="fade-right">
			  <h3 class="text-3xl font-poppins text-theme-gray-light font-extrabold">
			  <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
	<span class="text-theme-green-base text-base mr-3">01.</span>
				<span class=" text-theme-green-base font-bold">
				  ONDC for buyers
				</span>
		</div>
		<div class="carousel-item relative float-left w-full">
	<span class="text-theme-green-base text-base mr-3">02.</span>
				<span class=" text-theme-green-base font-bold">
				  ONDC for sellers
				</span>
		</div>
		</div>
		</div>
				
			  </h3>
			</header>
  
			{/* ondc for buyer blog */}
			<div class="flex flex-wrap items-center mb-6 sm:mb-32">
			  <div
				class="w-full sm:w-3/5 mb-4 sm:mb-0"
				style={{
				  borderColor: "black",
				  justifyContent: "center",
				  justifyItems: "center",
				}}
			  >
				<img data-aos ="fade-right"
				  alt=""
				  className="mx-auto"
				  src={ondc}
				  style={{ justifyContent: "center", justifyItems: "center" }}
				  class="rounded shadow"
				/>
			  </div>
			  <div class="w-full sm:w-2/5" data-aos ="fade-left">
				  
				<div class="text-right mb-4">
				
				  <p class="text-theme-aquamarine text-sm font-poppins">ONDC </p>
				  <div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
				  <h4 class="text-theme-green-base text-2xl font-poppins font-extrabold">
					Buyers
				  </h4>
				  </div>
				  <div class="carousel-item  relative float-left w-full">
				  <h4 class="text-theme-green-base text-2xl font-poppins font-extrabold">
					Sellers
				  </h4>
				  </div>
				  </div>
				  </div>
				  
				</div>
				<div class="bg-theme-green-base rounded p-6 shadow-xl ml-0 sm:-ml-16 mb-6">
				<div id="carouselExampleControls" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-inner relative w-full overflow-hidden">
    <div class="carousel-item active relative float-left w-full">
				<p class="text-theme-gray-deep leading-relaxed">
						  Lorem ipsum dolor sit amet, consectetur adipisicing
						  elit. Corporis eum nulla possimus velit voluptates?
						  Accusantium animi dolorem est quia tempora?
						</p>
						</div>
						<div class="carousel-item  relative float-left w-full">
				<p class="text-theme-gray-deep leading-relaxed">
						  Lorem ipsum dolor sit amet, consectetur adipisicing
						  elit. Corporis eum nulla possimus velit voluptates?
						  Accusantium animi dolorem est quia tempora?
						</p>
						</div>
						</div>
						</div>
				  
				</div>
				<div class="text-right">
				  <div class="flex justify-end mb-6">
					<span class="text-theme-gray-deep text-xs mr-2">
					  <a href="/" style={{ color: "blue" }}>
						Know more(detailed blog link)
					  </a>
					</span>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
	  </section>

{/*original code  */}
	  {/* <section id="experience" class="">
	  <div class="max-w-5xl mx-auto px-6 lg:px-0 mt-5">
			
			<header class="mb-16">
			  <h3 class="text-3xl font-poppins text-theme-gray-light font-extrabold">
				<span class="text-theme-green-base text-base mr-3">01.</span>
				<span class=" text-theme-green-base font-bold">
				  ONDC for buyers
				</span>
			  </h3>
			</header>
  
			<div class="flex flex-wrap items-center mb-6 sm:mb-32">
			  <div
				class="w-full sm:w-3/5 mb-4 sm:mb-0"
				style={{
				  borderColor: "black",
				  justifyContent: "center",
				  justifyItems: "center",
				}}
			  >
				<img
				  alt=""
				  className="mx-auto"
				  src={ondc}
				  style={{ justifyContent: "center", justifyItems: "center" }}
				  class="rounded shadow"
				/>
			  </div>
			  <div class="w-full sm:w-2/5">
				  
				<div class="text-right mb-4">
				
				  <p class="text-theme-aquamarine text-sm font-poppins">ONDC </p>
  
				  <h4 class="text-theme-green-base text-2xl font-poppins font-extrabold">
					Buyers
				  </h4>
				  
				</div>
				<div class="bg-theme-green-base rounded p-6 shadow-xl ml-0 sm:-ml-16 mb-6">
				  
				<p class="text-theme-gray-deep leading-relaxed">
						  Lorem ipsum dolor sit amet, consectetur adipisicing
						  elit. Corporis eum nulla possimus velit voluptates?
						  Accusantium animi dolorem est quia tempora?
						</p>
				  
				</div>
				<div class="text-right">
				  <div class="flex justify-end mb-6">
					<span class="text-theme-gray-deep text-xs mr-2">
					  <a href="/" style={{ color: "blue" }}>
						Know more(detailed blog link)
					  </a>
					</span>
				  </div>
				</div>
			  </div>
			</div>
		  </div>
	  </section> */}



      
    </>
  );
}
