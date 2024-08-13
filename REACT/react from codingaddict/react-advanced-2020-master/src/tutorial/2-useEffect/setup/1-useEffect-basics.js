import React, { useState, useEffect } from 'react';
// by default runs after every re-render ,the re render is caused by everytime useState is run 
// cleanup function
// second parameter when an empty list is used as it, the effect is only shown once 
//here depency on shows that it will run whenever the value changes 
const UseEffectBasics = () => {
   useEffect(()=>{
     console.log('call userEffect')
    if(value>1){
     document.title=`new message(${value})`}
  },[value])
  useEffect(()=>{
    console.log('hello')
  },[])
  console.log('Hi ')
  const [value,setValue]=useState(0)
  return( <div>
  <h1>{value}</h1>
  <button className='btn' onClick={()=>{setValue(value+1)}}>Click Me</button>
</div>)
};

export default UseEffectBasics;
/*
important note about the 
Here's a more detailed breakdown of what happens:

Initial Render:

The component mounts and the initial state (value) is set to 0.
console.log('Hi') runs, logging "Hi" to the console.
The return statement renders the initial UI with value displayed as 0.
Button Click:

The button's onClick event handler is triggered, calling setValue(value + 1).
This updates the state, causing React to re-render the component.
Re-render:

The component renders again with the updated state (value is now 1).
console.log('Hi') runs again, logging "Hi" to the console.
The return statement renders the updated UI with value displayed as 1.
*/