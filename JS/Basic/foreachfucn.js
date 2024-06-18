//Method to loop through the array
task=[
    'make dinner',
    'wash',
    'dishes',
    'make'
]
task.forEach(function(value,index) {
    console.log(value);
    console.log(index);
    //for using contiue 
    if(value==='dishes '){
        return;
    }
    
    
})
