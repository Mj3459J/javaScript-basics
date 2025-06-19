// Singleton
// Object.create

// Object literals
// 1. mostlu we will use "."" to access the object value
// eg:- jsUser.name;
const mySymbol=Symbol("key1");

const jsUser={
    name:"Mayursinh",
    "full name":"MJ",
    // mySymbol:"key111",// dont do it like this
    [mySymbol]:"Key111",
    age:20,
    lacation:"Gandhinagar",
    email:"mj@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(jsUser.email);
// console.log(jsUser[email]); will not work need to pass as string.
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);// now only way to print it is this cannot use it with ".".
// console.log(typeof(jsUser.mySymbol));// it will give string ,if we want it to behave as Symbol then see next line
// console.log(jsUser[mySymbol]);

jsUser.email="mgj@g.com"// update
// console.log(jsUser.email);

// Lock the values
// Object.freeze(jsUser);//now cannot change the values.

jsUser.email="mgj@gg.com"
// console.log(jsUser.email);// here no error will be given, the old value will be printed.

jsUser.greetings=function(){
    console.log("Hello"); 
}
jsUser.greetingsTwo=function(){
    console.log(`Hello user, ${this.name} `); 
}

// console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());
// console.log(jsUser);



