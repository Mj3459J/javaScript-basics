let score="33a"

// console.log(typeof(score));

let valueInNumber=Number(score);
// console.log(typeof(valueInNumber));
// console.log(valueInNumber);

// Conversion in Number
// "33"=> 33
// "33abc"=> NaN
// true=> 1

let isLoggedIn="MJ";
let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// Conversion in Boolean
// 1=>ture
// ""=> false
// "MJ"=>true
//  null=> false

let num=null
let strNum=String(num)
// console.log(strNum);
// console.log(typeof(strNum));

// Conversion in String
// 33=> "33"
// true=>"true"
// null=>"null"


// ***Operations***
// console.log("1"+2);//12
// console.log(1+"2");//12
// console.log("1"+2+2);//122
// console.log(1+2+"2");//32

// console.log(+true);// 1
// console.log(+"");// 0

let n1,n2,n3
n1=n2=n3=2+2;// 4 in all


// console.log(null>0);// false
// console.log(null==0);//false
// console.log(null>=0);//true
/* 
The reason is that equality == check and comparision(>,<,>=,<=) work differently
Comparision converts null to a number,treation it as 0.
that`s why null>=0 is true ans null>0 is false.

*/
// Strict check ===
// console.log("2"==2)// true
// console.log("2"===2)// false
// Strict check also checks the data type of the both values.


