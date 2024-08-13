import {Header} from './header.js';
import {Content}  from './content.js';
import {Footer} from './footer.js'
function App() {
  const handleClick=()=>{
 console.log('Hello');
   }
   const handleClick2=(name)=>{
    console.log(`${name} was clciked `)
   }
   const handleClick3=(e)=>{
    console.log(e)
    console.log(e.target);
   }
  return ( 
    <div className='App'>
      
    <Header />
    <Content />
    <button onClick={(e)=>handleClick3(e)}>Clcik it </button>
    <button onClick={()=>handleClick2('ha')}>Clcik it </button>
    <button onClick={handleClick}>Clcik it </button>
    <button onDoubleClick={handleClick}>Clcik it </button>
    <Footer />
    </div>
        )
}

export default App;
