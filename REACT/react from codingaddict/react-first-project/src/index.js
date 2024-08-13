import React, { Children } from 'react';
import ReactDom from 'react-dom'
import './minibook.css'
//we can use curly brackets to put js in jsx

 import { books } from './books';
function BookList (){
  return(
  <section className='booklist'>
  {books.map((book,index)=>{
    const {image,title,author}=book;
    return(
    <Book key={book.id} {...book}></Book> //here we have the spread operator which opens the object book
    )})}
</section>
)}
  const Book=(props)=>{
    const{image,title,author}=props //.item beacuse here props is a object instead of a string
    return( <article>
 <img src={image}
    alt='' />
    <h1>{title}</h1> 
     <h4>{author}</h4>
</article>)}
 
ReactDom.render(<BookList/>,document.getElementById('root'));

  