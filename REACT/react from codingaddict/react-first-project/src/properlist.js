import React, { Children } from 'react';
import ReactDom from 'react-dom'
import './minibook.css'
//we can use curly brackets to put js in jsx

  const books=[{
    id:1,
   image:'https://imgs.search.brave.com/6LwEU6XKuShO-hAQOUenxiKKYUGYj-UK7FE2RihxMdw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/Njc1NzQyL3Bob3Rv/L2Jvb2tzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05aVhS/ZE1zM3NOMjVpSHll/NWtBRkJxRDRUcjFJ/VlI0SVk4Z1hHOGJr/VE1VPQ',
   title:'moonn and back',
   author:'amelia Hepworth' 
  }
  ,{
    id:2,
   image:'https://imgs.search.brave.com/6LwEU6XKuShO-hAQOUenxiKKYUGYj-UK7FE2RihxMdw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/Njc1NzQyL3Bob3Rv/L2Jvb2tzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05aVhS/ZE1zM3NOMjVpSHll/NWtBRkJxRDRUcjFJ/VlI0SVk4Z1hHOGJr/VE1VPQ',
   title:'its a good day',
   author:'agatha Cristie' 
  }]
function BookList (){
  return(
  <section className='booklist'>
  {books.map((book,index)=>{
    const {image,title,author}=book;
    return(
    <Book key={book.id} item={book}></Book>
    )
  })
  
  }

</section>
  )}
  const Book=(props)=>{
    const{image,title,author}=props.item; //.item beacuse here props is a object instead of a string
    return( <article>
 <img src={image}
    alt='' />
    <h1>{title}</h1> 
     <h4>{author}</h4>
        
        </article>)}
 
ReactDom.render(<BookList/>,document.getElementById('root'));

  