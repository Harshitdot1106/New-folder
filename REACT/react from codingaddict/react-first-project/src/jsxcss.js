import React from 'react';
import ReactDom from 'react-dom'
import './minibook.css'
//NEsting of components and React tools
function BookList (){
  return(<section className='booklist'>
  <Book />
  <Book />

  
  </section>
  )}
  const Book= () => {
    return <article>
     <Image/>
     <Title />
     <Author />
    </article>
  }
 const Image =() =>{
  return <div>
    <img src='https://imgs.search.brave.com/6LwEU6XKuShO-hAQOUenxiKKYUGYj-UK7FE2RihxMdw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTgy/Njc1NzQyL3Bob3Rv/L2Jvb2tzLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz05aVhS/ZE1zM3NOMjVpSHll/NWtBRkJxRDRUcjFJ/VlI0SVk4Z1hHOGJr/VE1VPQ' 
    alt='image if book' ></img>
  </div>
 }
 const Title=()=>{
  return  <div><h1>
    I You moon and back
 </h1> </div>
 }
 const Author =()=>( <h4
 style={{
   color:'black',fontSize:'0.75rem'
 }}
 >Amella Hepworth</h4>)

ReactDom.render(<BookList/>,document.getElementById('root'));