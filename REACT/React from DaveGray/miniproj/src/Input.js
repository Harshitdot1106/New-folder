import colorNames from 'colornames'
const Input=({colorValue,setColorValue,setHexValue,isDarkTest,setIsDarkTest})=>{
return(
   <form onSubmit={(e)=>{
    e.preventDefault()
   }}>
    <label >Add Color Name: </label>
    <input 
    autoFocus
    type="text"
    placeholder="Add Color"
    required
    value={colorValue}
    onChange={(e)=>{setColorValue(e.target.value);
       setHexValue(colorNames(e.target.value))

    }} />
<button
onClick={()=>setIsDarkTest(!isDarkTest)}
> dark
</button>
   </form>
)
}
export default Input