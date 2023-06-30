import React from 'react';

// import data
import {hero} from "../data"

// Import components
import Stats from "./Stats"

const Hero = () => {
  // destructure hero
  const {title,subtitle,buttonText} = hero
  return(
    <section className=" h-[850px] bg-hero  w-full bg-cover bg-no-repeat bg-right text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28">

      <div className="container mx-auto text-center  ">
        {/* title */}
       <h1 className="text-2xl mx-auto font-semibold lg:text-[64px] mb-[30px] lg:leading-tight"> {title}</h1>

       {/* subtitle */}
       <h2 className="mb-[30px] lg:mb-[65px] max-w-[627px] mx-auto lg:text-xl">
        {subtitle}
       </h2>
       {/* button */}
       <button className="bg-[rgba(255,255,255,0.4)] px-[35px] py-[9px] rounded-md hover:bg-[rgba(255,255,255,0.5)] mb-[160px] text-xl backdrop-blur-sm lg:px-[80px] lg:py-[16px] lg:mb-[194px]">
        {buttonText}
       </button>
        <div className="text-black">
          <Stats />
        </div>
      </div>
    </section>
  )
};

export default Hero;
