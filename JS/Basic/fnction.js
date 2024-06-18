function words(noun,adjective,verb,adverb){
    var result="";
    result+="the "+ adjective+ noun+ verb+"to the store "+adverb ;
    return result;
}
console.log(words("dogs","big","ran","quickly"));
// this below code is the full code for defining a function
var greeting =function(){
    console.log('hello');
}
const object1={
     num:2,
    fun:function greeting(){
        console.log('hello3');
        //this is cALLED A Method of saving a function in a object
    }
}
