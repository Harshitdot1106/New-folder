const Todolist =[];
render();
function render(){
let todolis=''
for(let i=0;i<Todolist.length;i++){
    const tod=Todolist[i];
    const html = `<p>${tod}</p>`;
    todolis+=html;
}
//here the p tag gives a papragraph the todolis every time the loop is run and this helps in giving the line spces b/w the tow things
document.querySelector('.out').innerHTML=todolis}
function addtodo() {
    const ele=document.querySelector('.input');
    const name=ele.value
    console.log(name);
   Todolist.unshift(name);
   
   /* document.querySelector('.out').innerHTML=`${Todolist}`*/
     ele.value=''
     render();
}