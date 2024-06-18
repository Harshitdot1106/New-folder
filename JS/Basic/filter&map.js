task=[1,2,-5,6]
console.log(task.filter((value,index)=>{
    if(value>0){
        return true
    }
}))
console.log(task.map((value,index)=>{
    return 10;
}))
// filter hepls in filtering the value of the given array and the 
// map function helps in editing then but cannot delete then 


console.log(task.map((value,index)=>{
    return 2*value;
}))