import button from "./button"
const form=({reqType,setReqType})=>{
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
<button 
buttontext="Users"
reqType={reqType}
setReqType={reqType}
/>
<button 
buttontext="Posts"
reqType={reqType}
setReqType={reqType}
/>
<button 
buttontext="Comments"
reqType={reqType}
setReqType={reqType}
/>
    </form>
  )
}
export default form