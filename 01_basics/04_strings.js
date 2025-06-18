const name="MJ"
const age=20

// console.log(name+" "+age); old way to do this

// console.log(`${name}  ${age}`); Modern way to do this.

const gameName = new String('FREEfire');// string object

// console.log(gameName.__proto__);// need to use proto when doing in browser console

const newString = gameName.substring(0, 4)
// console.log(newString);

let str = "Hello, World!";
let result = str.slice(-6, -1);
// console.log(result); // Output: "World"

const newStringOne = "   MJ    "
// console.log(newStringOne);
// console.log(newStringOne.trim());

let str = "Hello, World!";
let result = str.replace("World", "JavaScript");
// console.log(result); // Output: "Hello, JavaScript!"

let str = "apple,banana,orange";
let result = str.split(",");
// console.log(result); // Output: ["apple", "banana", "orange"]




