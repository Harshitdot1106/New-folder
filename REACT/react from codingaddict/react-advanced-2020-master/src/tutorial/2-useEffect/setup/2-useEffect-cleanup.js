import React, { useState, useEffect } from 'react';

// cleanup function
// second argument

const UseEffectCleanup = () => {

  const [size,setSize]=useState(window.innerWidth);
  console.log(size)
  const checkSize=()=>{
   setSize(window.innerWidth) 
  }
  window.addEventListener('resize',checkSize)
   useEffect(()=>{
  //   window.addEventListener('resize',checkSize)//this causes alot of event listener in the console taking alot of space 
     return()=>{
      console.log('cleanup')
      window.removeEventListener('resize',checkSize)
     }
  },[size])
  return <div>
    <h2>Windows</h2>
    <h3> {size} PX</h3>
  </div>;
};

export default UseEffectCleanup;
