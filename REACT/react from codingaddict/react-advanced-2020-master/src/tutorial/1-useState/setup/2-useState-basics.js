import React, { useState } from 'react';
//all hooks start from use 
//in usestate theb first is the value and second one is the function
const UseStateBasics = () => {
//   console.log(useState('hello'))
// const value =useState(1)[0]
// const handler =useState(1)[1]
// console.log(value,handler)
const [text,setText]=useState('random title')
const handleclick=()=>{
  if(text==='random title'){
  setText('hello world')}
  else{
    setText('random title') }
}
  return <React.Fragment>
    <h2>{text}</h2>;
    <button className='btn ' onClick={handleclick}>change title</button>
  </React.Fragment>
};

export default UseStateBasics;
