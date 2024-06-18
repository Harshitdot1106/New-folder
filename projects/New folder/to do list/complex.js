const Todolist =[{
  name:'make dinner',
 dueDate:'2022-12-22'
},{
    name:'wash dinner',
    dueDate:'2023-11-21'
}];
render();
function render(){
let todolis=''
for(let i=0;i<Todolist.length;i++){
    const Tod=Todolist[i]
    /* we can use this instead of loop
    Todolist.forEach=((tod),index)=>{}
    */
    const tod=Tod.name
    const date=Tod.dueDate
    // const{ name duedate}=Todolist
    const html = `<p>
    ${tod} ${date}
    <button onclick="
       Todolist.splice(${i},1)
       render();
    ">Delete </button>
    </p>`;
    todolis+=html;
}
console.log(todolis)
//here the p tag gives a papragraph the todolis every time the loop is run and this helps in giving the line spces b/w the tow things
document.querySelector('.out').innerHTML=todolis}
function addtodo() {
    const ele=document.querySelector('.input');
    const name=ele.value
    const dte=document.querySelector('.inpet')
    const deu=dte.value
    console.log(name);
   Todolist.unshift({
    name:name,
    duedate:deu
    //name,
    //duedate
    //this can be used only when the name and variabale are same

   });
   
   /* document.querySelector('.out').innerHTML=`${Todolist}`*/
     ele.value=''
     render();
}