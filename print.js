console.log("Hello");  // changes the line
process.stdout.write("World"); // does not change the line
console.log("Hello");
// variales in js
// var score = 102; old way of declaring variables
let score = 102; // new way of declaring variables
let name = "chaicode.com"; // string variable
let isloggedin = true; // boolean variable
console.log(score,'\n',name,'\n',isloggedin); // printing variables
// template literals(pending to learn)
//objects in js
let teatype = ["Lemon tea", "orange tea", "ginger tea"]; // array object
let user = {firstname: "John", lastname: "Doe", age: 30}; // object literal
console.log(teatype[2]); // accessing array element
console.log(user.firstname, user.lastname, user.age); // accessing object property
