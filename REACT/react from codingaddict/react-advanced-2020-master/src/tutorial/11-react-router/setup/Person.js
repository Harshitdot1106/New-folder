import React, { useState, useEffect } from 'react';
import { data } from '../../../data';
import { Link, useParams } from 'react-router-dom';
const Person = () => {
  const {name,setName}=useState('default name')
  const {id}=useParams()
  useEffect(()=>{
    const newPerson=data.find((Person)=>person.id===parseInt(id))
    setName(newPerson.name)
  })
  return (
    <div>
      <h1>{name}</h1>
      <Link to="/people" className='btn'>
      Back to people
      </Link>
      <h2>person</h2>
    </div>
  );
};

export default Person;
