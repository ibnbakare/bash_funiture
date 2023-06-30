import React from 'react';

// Import data

 import {stats} from "../data"

const Stats = () => {
  return (
    <div className="bg-accent p-12 rounded-[20px] text-black">
      <div className="flex flex-wrap gap-y-8 ">
        {stats.map((items,index) =>{
          return(
            <div key={index} className="flex flex-col justify-center w-3/6 odd:border-r lg:flex-1 lg:even:border-r lg:even:last:border-none min-h-[70px]">
              <div>{items.value}</div>
              <div>{items.text}</div>
            </div>
          )
        })}
      </div>
    </div>
  );
};

export default Stats;
