//to make it run transfer in index.js


import React from 'react';
import ReactDom from 'react-dom'
//jsx rules 
//return 
// stateless functional component 
// always returns single elemnt so we should enlcose every thing in one div 
//div/section/articleor fragemnt
//use className instead class
//use camelCase for html
// close every elemnt 

function greeting(){//make the g capital of greeting to make this work
  return<div >
   <h1> this is Harshit and this is my first component</h1>;
  <ul>
    <li>
      <a href='#' >hello world</a>
    </li>
  </ul>
  <img src='' alt=""/>
  <input type='text' name ='' id=''
  ></input>
</div>
  }
 
const Greeting=()=>{
  return React.createElement('div',{},
  React.createElement('h1',{},'hello'))
}
//the method of creating an element is a diificult method so we dont use it 

ReactDom.render(<Greeting />,document.getElementById('root'));