import React, { useState } from 'react';
import { data } from '../../../data';

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people,setPeople]=useState(data);
  const removePerson =(id)=>{
    return people.filter((person)=>{person.id!==id})
  }
  return <section>
    <h3>prop dirlling</h3>
    <List people={people} />
  </section>;
};
const List=({people})=>{
  return <div>
  {people.map((person)=>{
       return <SinglePerson key={person.id} {...person} re />
})}
  </div>
}
const SinglePerson=({id,name})=>{
  return <div className='item'>
    <h4>Items</h4>
  </div>
}
export default PropDrilling;
