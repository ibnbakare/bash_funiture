import React from 'react';
// Importing data
import { features } from '../data';

const Features = () => {
  // Destructuring features
  const {image,buttonText,subtitle,title,items} = features
  return (
    <section className='section '>
      <div className="container mx-auto">
      <div className="flex flex-col  lg:flex-row lg:gap-x-[100px]">
        {/* images */}
        <div className="flex-1 order-1 lg:-order-1">
          <img src={image.type} alt='/'/>
        </div>
        {/* text */}
        <div className="flex flex-col flex-1 justify-end">
          <h2 className="title">{title}</h2>
          <p className="subtitle">{subtitle}</p>

          {/* items */}
          <div>
            {items.map((items, index)=>{
              // destructure items
              const {title,subtitle,icon} = items
              return(
              <div key={index}>
                <div>
                  {icon}
                 </div>

                 <div>
                  <h2>{title}</h2>
                  <p>{subtitle}</p>
                  </div>
              </div>
            )})}
          </div>
          </div>
        </div>

      </div>
    </section>
  )
};

export default Features;
