import React from 'react';
import ReactDom from 'react-dom'

//NEsting of components and React tools
function Greeting(){
  return( 
  <div>
   <Person />   
      <p>
    <Message /> 
   </p>
  </div>
  )}
 const Person = () => <h2>
    Harshit Says
  </h2>
const Message=()=>{
  return <p>this is my message</p> 
}

 

ReactDom.render(<Greeting />,document.getElementById('root'));