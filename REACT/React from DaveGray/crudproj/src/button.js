const button=({buttontext,reqType,setReqType})=>{
return (
<button 
className={buttontext===reqType? "selected":null}
type="button"
onClick={()=> setReqType(buttontext)}
>
</button>
    )
}
export default button