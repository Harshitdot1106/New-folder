import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value,setValue]=useState(0);
  const adding=(no)=>{
   console.log(no)
   let num=no+1;
   console.log(num)
  setValue(num)
  }
  
  const reseting=(no)=>{
   console.log(no)
   let num=no*0;
   console.log(num)
  setValue(num)
  }
  //this is really important
  const complexadd=()=>{
    setTimeout(()=>{
      //setValue(value+1)
      setValue((prevState)=>{
        return prevState+1;
      })
    },2000)
  }
  return( 
    <div>
  <h2>regular counter</h2>;
<h1>{value}</h1>
<button className='btn'onClick={()=>{adding(value)}}>Increase counter</button>
<button className='btn'onClick={()=>{setValue(value-1)}}>Decrease counter</button>
<button className='btn'onClick={()=>{reseting(value)}}>reseting counter</button>
<div>
  <h2>More complex counter</h2>
  <button className='btn' onClick={complexadd}>Increase Later</button>
</div>
</div>)
  };

export default UseStateCounter;
