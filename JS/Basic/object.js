var dog={
    "name":"Camper",
    "legs":4,
    'tails':1,
    "friends":["everything"]
};
console.log(dog);
var Name=dog.name;
console.log(Name);
var number=dog["legs"];
console.log(number);
// using the dot rule to manipulate the value of the object
// altering it 
dog.name="Happy";
console.log(dog["name"]);
//adding new values
dog.bark="bow-wow";
console.log(dog.bark);
//dleleting  a property
delete dog.tails;
console.log(dog.hasOwnProperty["n"])