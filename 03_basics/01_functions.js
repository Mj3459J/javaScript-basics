function add(a,b){
    return a+b;
}
// console.log(add(3,5));

function calculateCartPrice(...num){
    return num// return a array.
}
// console.log(calculateCartPrice(100,200,500));

// Passing obj as parameter.
const user={
    username:"MJ",
    price:50000
}

function handleObject(obj){
    console.log(`Username is ${obj.username} and price is ${obj.price}`);
    
}
// handleObject(user);


//****** Arroy Function.

// const chai=()=>{
//     console.log("Hello");   
// }
// chai()

// Implicit return

// const chai=(a,b)=> a+b
// const chai=(a,b)=> (a+b)
// const chai = () => ({name:"MJ"}) // if want to return obj then need to use perenthesis.
// console.log(chai());


/********* IIFE (Immediately Invoked Function Expression) **********/
// use semi-colen on the line before this otherwise error.

// named IIFE
(function chaii(){
    console.log(`DB Connected`); 
})();

((name)=>{
    console.log(`DB Connected ${name}`); 
})("MJ");
