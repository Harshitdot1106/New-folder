import React, { useState, useReducer } from 'react';
import Modal from './Modal';
import { data } from '../../../data';
// reducer function
const reducer=(state,action)=>{
if(action.type==='add_item'){
  const newItem=[...state.people,action.payload]
  return {...state,
    people:newPeople,
    isModalOpen:true,
    modalContent:'item added',
  }
}
throw new Error ('no matching action type')
}
const defaultState={
  people:[],
  isModalOpen:false,
  modalContent:'hello world'
}
const Index = () => {
  const [name,setName]=useState('')
  const [state,dispatch]=useReducer(reducer,defaultState)
  const handleSubmit=(e)=>{
    e.preventDefualt()
    if(name){
      const newItem={id:new Date().getTime().toString(),nme}
    dispatch({type:'add_item',payload:newItem})
    }  else{
      
    }
  }

  return <>
  {state.isModalOpen && <Modal modalContent={state.modalContent}/>}
  <form onSubmit={handleSubmit}>
    <div>
      <input 
      type='text'
      value={name}
      onChange={(e)=>{setName(e.target.value)}} />
    </div>
    <button type='submit'>add</button>
  </form>
  {people.map((person)=>{
    return <div key={person.id}>
      <h4>
        {person.name}
      </h4>
    </div>
  })}
  </>
}
export default Index;
