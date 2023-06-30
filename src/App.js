import React from 'react';

// import components

import Hero from "./components/Hero"
import Features from "./components/Features"

const App = () => {
  return <div className="w-full max-w-[100%]  bg-white">
    < Hero />
    <Features />
  </div>;
};

export default App;
