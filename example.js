// // // variable
// // var name="logesh";
// // var age=25;
// // var hasHobby=true;
// // console.log(name);
// // const sign="leo"
// // sign="cancer"
// // console.log(sign);
// // function displayUser(userName,userAge,userHobby){
// //     return 'Username is '+userName+' and age is '+userAge+' and hasHobby is '+userHobby;
// // }
// /// console.log(displayUser(name,age,hasHobby));

// // function sum(a,b){
// //     return a+b;
// // }



// // const sum=function(a,b){//anamenous function
// //     return a+b;
// // }
// // const sum=(a,b)=>{//arrow function
// //     return a+b;
// // }
// // console.log(sum(1,2));

// // const sum=a=>a+1;
// // console.log(sum(1));

// // const sum=(a,b)=>a+b;
// // console.log(sum(1,2));

// const person={
//     name:"logesh",
//     age:25,
//     greet:function(){//we can use normal function also like greet(){}
//         console.log("hello "+this.name);//using this keyword to access the object property 
//     }
// }
// person.greet();
// //arrow function does not support this keyword inside the object because  if we use this keyword inside the arrow function it will take the outer  name and the name inside the object  if we have 2 name for example 
// //greet:()=>{
//     // }

//Array

// const hobbies=['sports','cooking'];
// // for (const hobby of hobbies){
// //     console.log(hobby);
// // }
// console.log(hobbies.map(hobby=>'Hobby:'+hobby))//here inside the hobby each object in the hobbies array  is iterated and we can perform operations on it 

// const hobbies=['Sports','cooking'];//here we are not changing the hobbies the array data is stored in somememmory location and we are changing the value in  that memory location and  we are assigning the memory address of that array so we can use const for array and object

// hobbies.push('programming');
// console.log(hobbies);

// const person={name:'logesh'}
// person.name='mahesh'
// console.log(person)

//to copy 1 array to another array we can use spread operator or slice method or concat method
// const hobbies1=['sports','cooking'];
// const hobbies2=hobbies1.slice();//slice method
// hobbies2.push('programming')
// console.log(hobbies1,hobbies2)
// const hobbies1=['sports','cooking'];
// const hobbies2=[...hobbies1]//[ [ 'sports', 'cooking' ], 'programming' ] but we wanted it like this [ 'sports', 'cooking', 'programming' ] so we use spread operator hobbies2=[...hobbies1]//spread operator so it will iterate each item from hobbies1 and push it to hobbies2
// hobbies2.push('programming')
// console.log(hobbies1,hobbies2)
// const person={name:'logesh'};
// const student={...person};
// console.log(person,student);

// const toarray=(...args)=>{//this is called the rest operator and it will convert all the arguments into an array we can pass any number of arguments to the function
//     return args
// }
// console.log(toarray(1,2,3,4,5))
//the differences between the rest and spread operator is spread is used inside the array and object and the rest is used inside the function
//destructuring
const person={name:'logesh',age:25};//here we are creating the constants called name,age and we are assigning the values to the constants which are having the same name in the person object
const {name,age}=person;//here we are destructuring the person object and we are assigning the name
// console.log(name,age)

const hobbies=['sports','cooking'];
const [hobby1,hobby2]=hobbies;//here we are destructuring the hobbies array and we are assigning the values to the constants which are having the same name in the hobbies array
// console.log(hobby1,hobby2)

// Asynchronous code
// setTimeout(()=>{//Js is called non blocking language because here the the hi,hello will  be printed first and then the setTimeout will be executed bcoz it has time delay of 2s 
//     console.log('hello')
// },2000)
console.log('hi');
console.log('hello');
//callback->means don't call me now call afterwards

// const fetchData=(callback)=>{//here we are passing the callback function as an argument to the fetchData function and we are calling the callback function inside the fetchData function after 1.5s
//     //here we are using setTimeout to simulate the asynchronous code and we are calling the callback function after 1.5s
//     setTimeout(()=>{
//         callback('Function executed');
//     },1500)
   
// }
// setTimeout(()=>{
//     fetchData((result)=>{
//         console.log(result);//we are passing the arrow () function as callback to the `fetchData` function and we are calling the fetchData function after 2 seconds and then we are calling the callback function inside the fetchData function
//     })
// },2000);
//here first setimeout is executed after 2s and then the fetchData function is executed after 1.5s and then the callback function is executed after 1.5s
//we are using the promise when we don't know when we get the result for that we use the promise and we can get the result positive or negative
let  mypromise=new Promise((myResolve,myReject)=>{//here Promise is object
  setTimeout(()=>{
    myResolve('logesh');
  },2000)
})

mypromise.then((name)=>{//for success .then is use  and the catch is used for failure
    return 'Name:'+name;//here we are receiving the name logesh as value from the myresolve and we making the chnages and and returning it and it is received in other .then function
}).then((name)=>{
    console.log(name);//
})
.catch(()=>{
    console.log('Failure')
})

