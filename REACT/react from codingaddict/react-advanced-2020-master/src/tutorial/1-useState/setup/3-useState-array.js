import React, { useState } from 'react';
import { data } from '../../../data';
//istead of importing we can also use react.usestate
const UseStateArray = () => {
  const [people,setPeople] =useState(data)
  // function to delete all by making the state empty
  const deleteall=()=>{
    setPeople([]);
  }
 
  console.log(people)
  //function to delete specific item
 const Delete = (id) => {
    const newPeople = people.filter(person => person.id !== id);
    setPeople(newPeople);
  };
  //aliter for function
  /* //function to delete specific item
 const Delete = (id) => {
       setPeople((oldPeople)=>{
        let newPeople=oldPeople.filter((people)=>{
             person.id!==id})
          return newPeople;
            });*/
  return (
    <div>
   { people.map((person)=>{
      const {id,name}=person
      return (
                <div  key ={id} className='item'>
          <h4>
            {name}
          </h4>
          <button
           onClick={()=>{Delete(id)}}
          className=''
          >DELETE</button>
        </div>
      )})}
    
  <button onClick={deleteall} className='btn'> DELETEALL </button>
  </div> )
  }
export default UseStateArray;
