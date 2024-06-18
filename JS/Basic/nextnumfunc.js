function nextnum(arr, item){
arr.push(item);
return arr.shift();}
var arr=[1,2,3,4,5];
console.log("Before"+ arr);
console.log(nextnum(arr,6));
console.log(arr);