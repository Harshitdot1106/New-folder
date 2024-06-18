//setTimeout takes two parameter one as function and other as time in milisec

setTimeout(function(){
    console.log('timeout');
},3000);
//the 3000 here shows tat the function will run after 3000 milsec beacuse of settimeout
console.log('next line')
//this is called asynchronous code as it sets the timers and then mmoved to the next line

let interval =setInterval(function(){
    console.log('interval');
},3000)

//setinterval displays the code in in every 3sec


clearInterval(interval)
console.log('interval completed')