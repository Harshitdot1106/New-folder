import React, { useState } from 'react';
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange



const ControlledInputs = () => {
  const [firstname,setFirstName]=useState('')
  const [email,setEmail]=useState('')
  const [people,setPeople]=useState([])
  const handleSubmit =(e)=>{
   e.preventDefault()//prevents the default form behaivour
  const person = { firstname, email };
      setPeople((people) => {
        return [...people, person];
      });
      setFirstName('');
      setEmail('');
  
  };
  return(
    <article>
      <form className='form' onSubmit={handleSubmit}>
       <div className='form-control'>
        <label htmlFor='firstName'>Name :</label>
        <input type='text' id='firstName' name='firstName' value={firstname} onChange={(e)=>{
          setFirstName(e.target.value)
        }} />
       </div>
         <div className='form-control'>
          <label htmlFor='email'>email :</label>
          <input type='email' id='email' name='email' value={email} onChange={(e)=>{
            setEmail(e.target.value)
          }}>
          </input>
         </div>
         <button type='submit' onClick={handleSubmit} value={email}>add person</button>
      </form>
    </article>
  )
};



export default ControlledInputs;
