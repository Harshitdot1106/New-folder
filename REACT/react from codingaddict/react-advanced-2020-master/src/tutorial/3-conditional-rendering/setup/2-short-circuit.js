import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text,setText]=useState('k')
  const [isError,setIsError]=useState(false)
  //  const firstValue = text || 'hello world';
  //  const secondValue = text && 'hello world';
//just basic functiooning of 'and ' and 'or' operator 
  return <div>
{/* <h1>{firstValue}</h1>
<h2>
  value:{secondValue}
</h2> */}
<h1>{text|| 'john doe'}</h1>
<button className='btn' onClick={()=>{
  setIsError(!isError)
}}>toggle error</button>
{isError&&<h1>Error.....</h1>}
{isError ?<p>there an error</p>:<p>there is no error</p>}
  </div>
}
export default ShortCircuit;
//The logical OR operator (||) returns the first truthy value or the last value if none are truthy.
//The logical AND operator (&&) returns the first falsy value or the last value if none are falsy.