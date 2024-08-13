import React, { Children } from 'react';
import ReactDom from 'react-dom'
import './minibook.css'
//we can use curly brackets to put js in jsx

  const firstbook={
   image:'https://imgs.search.brave.com/6LwEU6XKuShO-hAQOUenxiKKYUGYj-UK7FE2RihxMdw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/Njc1NzQyL3Bob3Rv/L2Jvb2tzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05aVhS/ZE1zM3NOMjVpSHll/NWtBRkJxRDRUcjFJ/VlI0SVk4Z1hHOGJr/VE1VPQ',
   title:'moonn and back',
   author:'amelia Hepworth' 
  }
  const Secondbook={
   image:'https://imgs.search.brave.com/6LwEU6XKuShO-hAQOUenxiKKYUGYj-UK7FE2RihxMdw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/Njc1NzQyL3Bob3Rv/L2Jvb2tzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05aVhS/ZE1zM3NOMjVpSHll/NWtBRkJxRDRUcjFJ/VlI0SVk4Z1hHOGJr/VE1VPQ',
   title:'its a good day',
   author:'agatha Cristie' 
  }
function BookList (){
  return(<section className='booklist'>
  <Book 
  img={firstbook.image} 
  title={firstbook.title} 
  author={firstbook.author}>
<p>
  this is my first experience in using react js so i want to exel in it to a greater extend 
</p>
  </Book>
  <Book 
  img={Secondbook.image} 
  title={Secondbook.title} 
  author={Secondbook.author}/>
  <Book title='random' number={22}/>
</section>
  )}
  
  const Book= (props) => {
    console.log(props);
    // alt way of destructuring prop const{img,title,author}=props;
    return( <article>
 <img src={props.img}
    alt='' />
    <h1>{props.title}</h1> 
     <h4>{props.author}</h4>
     <h2>{props.children}</h2>
        </article>
  )}
 
ReactDom.render(<BookList/>,document.getElementById('root'));

  /* aliter important*/
     
 /* const Book= ({img,title,author,children}) => {
    //we can also use prompt here then we need to wirte prompt.img 
    // alt way of destructuring prop const{img,title,author}=props;
    return( <article>
 <img src={img}
    alt='' />
    <h1>{title}</h1> 
     <h4>{author}</h4>
     {children}
    
        </article>
  )}*/

