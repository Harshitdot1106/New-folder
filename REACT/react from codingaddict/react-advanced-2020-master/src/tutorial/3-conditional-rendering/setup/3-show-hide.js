import React, { useState, useEffect } from 'react';
//aliter of this method in the final file using useEffect
const ShowHide = () => {
  const [show,setShow]=useState(true);
  return<div>

    <button className='btn'onClick={()=>{
   setShow(!show)
    }} >Show/Hide</button>
    {show &&<Item />}
  </div>
};
const Item=()=>{
   const checking=()=>{
    setSize(window.innerWidth)
  }
  const [size,setSize]=useState(window.innerHeight)
  window.addEventListener('resize',checking)
 

  return <div style= {{marginTop:'2rem'}}>
    <h1>window</h1>
    <h2>
      size:{window.innerWidth}
    </h2>
  </div>
}
export default ShowHide;
