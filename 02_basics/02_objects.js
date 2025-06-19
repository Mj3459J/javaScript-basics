// Singleton
const user=new Object()// Singleton object
// console.log(user);

user.id="242"
user.name="Mj"
user.isLoggedIn=false

// console.log(user);
const regularUser={
    email:"aaa@g.c",
    fullName:{
        userFullName:{
            firstname:"Mayursinh",
            lastName:"Jadeja"
        }
    }
}
// console.log(regularUser.fullName.userFullName.firstname);// to access Mayursinh

const obj1={1:"a",2:"b"};
const obj2={3:"a",4:"b"};
const obj4={5:"a",6:"b"};

// const obj3=Object.assign(obj1,obj2,obj4)// this will also modify the obj1
// const obj3=Object.assign({},obj1,obj2,obj4);// assign => (targer,sources).
const obj3={...obj1, ...obj2, ...obj4};// mostly we use this spread operator.

// console.log(obj1);
// console.log(obj3);


// 
const course={
    courseName:"JS",
    price:"111",
    courseInstructor:"Hitesh"
}
// course.courseInstructor
// De-Structuring.
const {courseInstructor: instructor}=course
console.log(instructor);// no need to write course.courseInstroctor

