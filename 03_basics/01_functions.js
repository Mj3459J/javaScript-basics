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
handleObject(user);

