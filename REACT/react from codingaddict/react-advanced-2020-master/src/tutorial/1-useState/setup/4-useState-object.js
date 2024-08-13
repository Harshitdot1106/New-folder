import React, { useState } from 'react';

const UseStateObject = () => {
  const [person,setPeople]=useState({
    name:'hi',
    age:24,
    message:'random'
  })
  //another way to change is 
  const [name,setName]=useState('peter') //and so on
  const change=()=>{
    //setPeople({message}:'helloworld') this will change the whole object and give non mentioned items null value so it will only shpw message so we use spread operetor  
    setPeople({...person,message:'helloworld'})
  }
  return (
  <div>
  <h2>{person.name}</h2>;
  <h2>{person.message}</h2>;
  <h2>{person.age}</h2>;
  <button id='btn' onClick={change}> Change mesage</button>
  </div>

)};

export default UseStateObject;
