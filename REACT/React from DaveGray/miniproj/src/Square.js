const Square=({colorValue,setColorValue,hexValue,isDarkTest})=>{
    
   return( 
   <section className="square"
   
    style={{background:colorValue,
          color:isDarkTest ? "#000" : "#FFF"
            }}
    >
      <p>{colorValue?colorValue:"Enpty Value"}</p>
      <p>{hexValue?hexValue:null}</p>
    </section>)
}
export default Square