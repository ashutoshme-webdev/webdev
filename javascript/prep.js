//scope-scope is a certain region of the program where a defined variable exists and can be recognised 
      //and beyond this region/scope it cannot be recognised. ex- global scope, block scope, functional scope

//functional scope- var
//block scope- let,const

//variable shadowing -  Variable shadowing occurs when a variable of an inner scope is defined with the same name 
                      //as a variable in the outer scope. Here, inner scope can access variables defined in the outer scope and
                      //the outer variable is said to be shadowed by the inner variable which means that the value of the inner variable 
                      //will overlap/replace the value of the outer variable within the scope that it exists.

//illegal shadowing - While shadowing a variable, it should not cross the boundary of scope, i.e. we can shadow var variable with let
                    //but we can't shadow let variables with var. if we do, it gives an error and this is illegal shadowing.
                    // if we shadow var variable with var, it just reinitialises the variable

//JavaScript Execution Process - the execution of the javascript code happens in two phases, one is the creation phase and 
                               //the other is the execution phase. In creation phase, three things happen, first it creates
                               //a global/window object, second, it setups a memory heap for storing variables and function
                               //references, so it takes all the variables and functions and stores it inside the window object
                               //third, it initializes variable declarations with undefined. and for the function declarations,
                               //it takes the whole function code and stores it in the window object. This is the reason why hoisting occurs
                               //Now, during the execution phase, the js engine executes the code line by line assigning the values to
                               //the variables and executes the function calls

//hoisting - During the creation phase, js engine moves the variables and function declarations to the top of their scope 
           //prior to the execution of the code and this is called hoisting. const and let variables are not hoisted like var
           //they are hoisted in temporal dead zone.

//temporal dead zone - the state where the variables are in the scope but they are not yet declared

//js engine - JavaScript is not understandable by computer but the only browser understands JavaScript. 
             //So, we need a program to convert our JavaScript program into computer-understandable language. 
             //js engine is a computer program that executes JavaScript code and converts it into computer understandable language.
             //earlier used to be just interpreters(program that directly executes instructions without compilation)

//map - map is an array method used for creating a new array from an existing array by applying a function to each one of the 
       //elements of the first array

//filter - filter is an array method that puts a conditional statement on each element of the array and returns only 
         //those elements that fulfill the condition

//reduce - reduce is an array method that reduces an array of values down to just one value. ex- sum of all elements in the array
          // takes callback function with input parameters and an initial value.
          //reduce((accumulator, currentValue, index, array)=>{return value}, 0);
          //accumulator is the result of the previous computation - initialised with zero, if not, takes the value of the first element

//map vs forEach - both are array methods to loop through the elements of the array
                 //1. map method returns a new array whereas forEach method does not return a new array
                 //2.map method can be used/chained with other array methods like filter,reduce but forEach method cannot be chained
                 //3.map method is used to transform each element of array whereas forEach method is used to loop through each element of array

//first class function - A programming language is said to have First-class functions when functions in that language
                       // are treated like any other variable. For example, in such a language,
                       // a function can be passed as an argument to other functions, 
                       //can be returned by another function and can be assigned as a value to a variable.

//higher order functions - Higher-order functions are functions that return a function or take in a function as an argument.

//IIFE - Immediately Invoked Function Expression - is a function that runs as soon as it is defined

//closure - A closure is the ability of a function that allows it to access variables and functions out of its scope.
           //closures are created every time a function is created. closures are functions which can access outside.

//hoisting in function - functions are hoisted differently from variables, functions are hoisted completely

//argument - when we call a function, the values we pass to the function are the arguments
//Ex-square(5);   5 is argument 
//params/parameters - when we recieve the values in a function, the values are the parameters
//Ex-function(num){}   num is parameter

//spread operator - Ex - multiply(...arr);  it is spread operator, it is similar to arguments
//rest operator - Ex -  function multiply(...arr){}; it is rest operator, it is similar to parameters, it should be the last parameter

//spread operator - The spread operator in JavaScript expands values in arrays and strings into individual elements 
                 //Spread Operator is unpacking collected elements such as arrays into single elements. stores in array
 
//rest operator - the rest operator puts the values of user-specified data into a JavaScript array. 
                //Rest Parameter is collecting all remaining elements into an array. stores in array

//callback function - a function that is passed into another function as an argument/parameter which is invoked 
                     //inside the outer function to complete some action

//Normal function vs Arrow Function - 1. syntax 2. arguments keyword works in normal function but not in arrow function
                                   //3. this keyword works in normal function, whereas in arrow function, it refers to global object
            

//lexical scope - the scope where the variable defined outside the scope is accessible inside the scope
//module pattern - The module pattern is a design pattern used for improving the maintainability and reusability 
                 //of the code by creating public and private access levels.
                 //The module pattern is quite similar to an IIFE (immediately invoked functional expression), 
                 //but a module always returns an object instead of a function.
                 //The module pattern keeps the privacy of the state and organizes using closures. 
                 //It protects the pieces from the global scope, avoiding possible errors and conflicts.

//closure vs scope - whenever we create a function within another function, then the inner function is the closure
                   //whereas a scope defines what variable we have access to
                   //closures are generally returned so that private variables can be accessed through the closure

//currying - technique that transforms a function having multiple arguments into a sequence of functions with a single argument
            //They are constructed by chaining closures by immediately returning their inner functions simultaneously. 

//use of currying - It helps us to create a higher-order function
                  //It reduces the chances of error in our function by dividing it into multiple smaller functions that handle one task.
                 // It is very useful in building modular and reusable code
                 // It helps us to avoid passing the same variable multiple times
                 // It makes the code more readable

//partial application - technique that transforms a function into another function with smaller arity.
                       //it does so by binding values to one or more arguments
//arity - the number of arguments a function receives












//                  let students = [
//     {name: "A",roll: 1, mark: 70},
//     {name: "B",roll: 2, mark: 75},
//     {name: "C",roll: 3, mark: 79},
// ];
// console.log(students);
// let pep=students.filter(stu=>stu.mark>73).map(stu=>stu.name);
// console.log(pep);
// let people=students.filter(stu=>stu.mark<75).forEach(stu=>console.log(stu.roll));
//console.log(people);


// let ans=students.reduce((acc,cur,i,arr)=>{
//     if(cur.mark<=75){
//     cur.mark=cur.mark+5;
//     }
//     if(cur.mark>75){
//     acc=acc+cur.mark;
//     }
//     return acc;

// },0);
// console.log(ans);
// let ans=students.map(stu=>{
//     if(stu.mark<=75)
//     stu.mark=stu.mark+5;
//     return stu;
// }).filter(stu=>stu.mark>75).reduce((acc,cur)=>acc+cur.mark,0);
// console.log(ans);

// for(var i=0;i<5;i++){
//     setTimeout(function(){
//         console.log(i);
//     },i*1000);
// }
//5 console.log(i) function will be in the callback queue because of setTimeout, and will execute after call stack is cleared.
//So, in case of let, it will console log 0,1,2,3,4 because let is block scoped and for each loop, 
//it will create another block scope for the function
//but in case of var, it will console log 5,5,5,5,5 because var is not block scoped, and after each loop,
//var value will be updated because var can be reinitialized even outside the block.
//Remember, console.log(i) will be executed last, with let remembering each value in scope and var getting updated after each loop/scope
                               
                               

//closure practice

// function outer() {
//     let a = 5;
//     console.log(a);
//     function inner1() {
//         let b = 7;
//         console.log(b);

//         function inner2() {
//             let c = 9;
//             console.log(c);

//             function inner3() {
//                 let d = 11;
//                 console.log(d);

//             }
//             return inner3
//         }
//          return inner2
//     }
//     return inner1
// }

// let comp = outer();
// let ans=comp();
// ans();

// var addSix=createBase(6);
// console.log(addSix(5));
// console.log(addSix(9));


// function createBase(num){
//     return function(d){
//       return d+num;

//     }

// }


//currying practice

// /*f(a,b) implementation */
// function f(a,b) {
//     return "Works"
// }

// /*f(a)(b) implementation */
// function f(a) {
//     return (b) => {
//          "Works"
//     }
// }
// console.log(f(1)(2)) // works
// console.log(f(1)); /* (b) => {return "Works" } */

// /*Simple function*/ 
// const add = (a, b, c)=>{
//     return a+ b + c
// }
// console.log(add(1,2 ,3)); // 6

// /* Curried Function */
// const addCurry = (a) => { // takes one argument
//     return (b)=>{                 //takes second argument
//         return (c)=>{             //takes third argument
//             return a+b+c
//         }
//     }
// }
// console.log(addCurry(1)(2)(3)); //6

// function sum(a) {
//     return (b) => {
//         return (c) => {
//             return a + b + c
//         }
//     }
// }
// /* you can call it in two ways*/
// console.log(sum(1)(2)(3)); //6

// const sum1 = sum(1);
// const sum2 = sum1(2);
// const result = sum2(3);
// console.log(result); // 6

// function sum(operation) {
//     return (a) => {
//         return (b) => {
//         if(operation === "sum")
//                   return a + b;
//                     else if(operation === "multiply")
//                     return a * b;
//                     else if(operation === "divide")
//                     return a / b;
//                     else if(operation === "subtract")
//                     return a - b;
//                     else return "No / Invalid Operation Selected"
//         }
//     }
// }
// const mul = sum("multiply");
// console.log(mul(3)(5));  //15 this can be reused again and again
// console.log(mul(5)(9));  //45 

//infinite currying
//recursive solution
//  function sum(a) {
//     return function(b) {
//         if (b) {
//             return sum(a + b);
//         } else {
//             return a;
//         }
//     }
// }
// console.log(sum(3)(5)(6)());  the last () tells that no argument is passed which stops the function 
                                //otherwise it will return the code of whole function


//updating DOM using currying

// {/* <div>
//   <h1 id="header">Hello Piyush</h1>
// </div> */}

// const updateElemText = id => content => document.querySelector(`#${id}`).textContent= content;
// function updateElemText(id) {
//     return function (content) {
//         document.querySelector("#"+id).textContent=content;
// };
// }
// const updateHeaderText = updateElemText('header');
// updateHeaderText('Hello RoadsideCoder!');

//curry implementation - convert f(a,b,c) into a curried function f(a)(b)(c)
// function curry(func){
//     return function curriedFunc(...args){
//         //console.log(args.length, func.length);
//         if(args.length>=func.length){
//             return func(...args);
//         }
//         else{
//             return function (...next){
//                 return curriedFunc (...args, ...next);
//             };
//         }

//     };

// }
// const sum = (a, b, c, d) => a + b + c + d;
// const totalSum = curry(sum);
// console.log(totalSum(1)(2)(3)(4));




//partial application practice

// function sum(a) {
//     return (b, c) => {
//         return a * b * c
//     }
// }
// let x = sum(10);
// x(1,2);
// x(20,30);
// sum(10)(1,2);
// sum(10)(20,30);  takes two arguments whereas in currying, it would have taken three arguments
//in partial application, it expected 3 arguments, where two arguments were sent as one (1,2), (20,30), and had 2 nested function
//in currying, it expected 3 arguments, and had 3 nested function


