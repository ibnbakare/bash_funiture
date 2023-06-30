import React from 'react';

// import data

import {hero} from "../data"
const Hero = () => {
  // destructure hero
  const {title,subtitle,buttonText} = hero
  return(
    <section className=" h-[850px] bg-hero  w-full bg-cover bg-no-repeat bg-right text-white pt-[225px] pb-[254px] relative mb-12 lg:bg-center lg:mb-28">

      <div className="container mx-auto text-center  ">
        {/* title */}
       <h1 className="text-2xl mx-auto font-semibold lg:text-[64px] mb-[30px] lg:leading-tight"> {title}</h1>
    
        
      </div>
    </section>
  )
};

export default Hero;
