import { useState } from "react"

export const Content =()=>{
const [name,setName]=useState('Dave')
const [count,setCount]=useState(0);
  const handleNameChange=()=>{
    const names=['bob','Kevin','Dave']
    const intt =Math.floor(Math.random()*3);
   setName(names[intt])}
    const handleClick=()=>{
        setCount(count+1)
 console.log(count);
   }
   
    return ( <main>
                <p>
                     Hello{name}
    
    <button onClick={handleNameChange}>change Name</button>
    <button onClick={()=>handleClick()}>Clcik it </button>
    <button onClick={()=>console.log(count)}>show count </button>
    
                   
                </p>
            </main>
        
    )
}