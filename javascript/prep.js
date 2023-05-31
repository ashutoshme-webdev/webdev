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


//delete is only used when we want to delete properties from an object and not a local variable

//shallow copy - after copying, when one object holds a reference to another object
               //Shallow copy method creates a copy where the source and the copied variable reference remain the same.
               // This means that modifications made in one place would affect both places.
               //shallow copies share references with source objects, 
               //they are more appropriate for not nested objects 
               //Common methods like Array.concat(), Array.from(), Object.assign(), etc creates a shallow copy.

//deep copy -  deep copies do not share any references with original objects.
              //Deep copy method creates a copy where the source and the copied variable reference are completely different. 
              //This means that modifications made in one place would only affect the variable where we are making a change.
              //Using the spread syntax, we can create a deep copy if there is no nesting.
              //In case of nesting, the spread operator creates a shallow copy.
              //If the objects/arrays are nested, then we can achieve deep copy by using JSON.parse() and JSON.stringify()
              
//this - this keyword is used to reference to a single object, 
        //this keyword refers to different objects depending on where/how this keyword is invoked/used
        //In an object method, this refers to the object, In a function, this refers to its immediate parent object.
        //alone, this refers to the global object
        //in arrow functions, this takes the value from its parent function(specifically function and not object)
        //so, if arrow function is inside an object, this takes the value from its parent function, 
        //which if not present, is the main function which refers to the window object, 
        //if function is present then it will depend on that function, it will refer to whatever that function refers to

//callback hell - Callback hell is a phenomenon that happens when multiple callbacks are nested on top of each other. 
                 //The two common ways of escaping the callback heare are by using promises and async/await.


//promise - promise is a JavaScript object that allows you to make asynchronous(aka async) calls. 
            //it stores the result of an asynchronous call.
            //It produces a value when the async operation completes successfully or produces an error if it doesn't complete.

//then - if a promise is fulfilled, we will get the result in then,   method of the promise 
//catch - if a promise is rejected/fails, we will get the result in catch,   method of the promise

//repeat promise video - roadsideCoder, repeat call,bind,apply

//call - call is a predefined javascript method, that is used to write methods for different objects.
        //by using call method, we can bind a function to a particular object
        //The call() method calls the function with a given this value and arguments provided individually.
        //takes arguments separately

//apply - apply is a predefined javascript method, that is used to write methods for different objects.
          //takes arguments as an array

//bind - bind is a predefined javascript method, that is used to create a new function in which we can bind an object
        //returns a function

//debounce - Debounce function limits the execution of a function call and waits for a certain amount of time before running it again(ex: search bar)
//throttle - Throttling is a technique, to limit the execution of an event handler function, even when this event triggers continuously due to user actions. (ex: browser resizing)

//event propagation - Event propagation is a way to describe the direction of execution of events that are fired in a web browser. 
                     //It determines in which order the elements receive the event.
//event bubbling - When an event happens on a component, it first runs the event handler on it, then on its parent component, then all the way up on other ancestors’ components.

//event capturing -  it means that the event is first captured by the outermost element and propagated to the inner elements. 










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

// object practice
// let user = { 
//     naam: "Roadside Coder",
//     age: 24 ,
//     "like this video": true,      //to add a key having space, put it in string literal
//                                   //   to access it, use bracket notation, console.log(user["like this video"]);
// };
// delete user["like this video"];
// console.log(user);
// delete user.age;  deletes age property from user object

// const func = (function(a){
//      delete a; 
//      return a; 
//     })(5);
//     console.log(func);  since a is a local variable, delete is unable to remove it, it only removes properties from an object

// const property="firstName";
// const name="Harry";

// const user = {
//     property: name,
// }
// console.log(user); //output= property: 'Harry';
// const user = {
//     [property]: name,   //using bracket, we can take computed values for keys in object
// }
// console.log(user[property]); //output= firstName: 'Harry';
// console.log(user.firstName); //output= firstName: 'Harry';

// let nums = { 
//     a: 100, 
//     b: 200, 
//     title: "My nums" 
// };
// function multiplyByTwo(obj) {
//      for (let key in obj) { 
//         if (typeof obj[key] == 'number') {
//              obj[key] *= 2; 
//             }
//          }
//          }  //multiplies only number values in object


// const obj = { 
//     b: 'one', 
//     b: 'two', 
//     a: 'three'  //a is repeated
// }; 
// console.log(obj); //{ a: "three", b: "two" } 
                //because the object will take the last specified value of the same property in its original position/order.
                //so a is still in first position even though it is updated later



// const a = {}; 
// const b = { key: 'b' }; 
// const c = { key: 'c' };

// a[b] = 123; //b is a object, Object keys are automatically converted into strings. 
//             //We are trying to set an object(b) as a key to object `a`, with the value of `123`.
//             //However, when we stringify an object, it becomes `"[object Object]"`.
//             //So what we are saying here, is that `a["[object Object]"] = 123`.
//             //Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. 
//             //So then, `a["[object Object]"] = 456`.
//             //Then, we log `a[b]`, which is actually `a["[object Object]"]`.
//             //We just set that to `456`, so it returns `456`.
// a[c] = 456; 


// console.log(a[b]); //456
    

// let user = { 
//         naam: "Roadside Coder",
//         age: 24 ,
// };

// const strObj = JSON.stringify(user);  //JSON.stringify converts object to string
// console.log(strObj);  //{"naam":"Roadside Coder","age":24} --> string
// console.log(JSON.parse(strObj));  //JSON.parse converts string to object

//where/why are they used    //we convert object to string, because we cannot directly store an object inside our local storage
                             //we can then pass it as a value in key: value pair to the local storage
// localStorage.setItem("test", strObj);  //key--> test, value--> strObj
//localStorage.setItem("test", user); //if we directly pass an object, it will give, value --> [object Object]

//console.log([..."Lydia"]);  //output = ["L", "y", "d", "i", "a"]

// const settings = { username: 'lydiahallie', level: 19, health: 90, };

// const data = JSON.stringify(settings, ['level', 'health']); console.log(data); // "{"level":19, "health":90}"

//The second argument of `JSON.stringify` is the *replacer*. The replacer can either be a function or an array, 
//and lets you control what and how the values should be stringified.
//If the replacer is an *array*, only the property names included in the array will be added to the JSON string. 
//In this case, only the properties with the names `"level"` and `"health"` are included, `"username"` is excluded. 
//`data`is now equal to `"{"level":19, "health":90}"`.
//If the replacer is a *function*, this function gets called on every property in the object you're stringifying. 
//The value returned from this function will be the value of the property when it's added to the JSON string. 
//If the value is `undefined`, this property is excluded from the JSON string.

// const settings = { username: 'lydiahallie', level: 19, health: 90, };

// const data = JSON.stringify(settings, double);  //replacer is a function
// function double(key,val){
//     if (typeof val === "string") {
//               return undefined;
//             }
            
//             return val;
// }
// console.log(data); 
// console.log(JSON.parse(data));


// function replacer(key, value) {
//     // Filtering out properties
//     if (typeof value === "string") {
//       return undefined;
//     }
//     return value;
//   }
  
//   const foo = {
//     foundation: "Mozilla",
//     model: "box",
//     week: 45,
//     transport: "car",
//     month: 7,
//   };
//   JSON.stringify(foo, replacer);
//   // '{"week":45,"month":7}'
  
// let user={ name:"Piyush", age:24 }

// const {name}= user;

// console.log(name);

// const { name: myName } = { name: 'Lydia' };  //renaming name to myName, so now, name cannot be used, myName is used

// console.log(name); //undefined 
// console.log(myName); //Lydia

// let user={ name:"Piyush", age:24, fullName: { first: "Aman", last: "Das",}, }

// const {fullName:{first}}= user;  //we can further destructure by using {} object literal, here, its not renaming

// console.log(first);


// function getItems(fruitList, favoriteFruit, ...args) { console.log(
//  [...fruitList, ...args, favoriteFruit]); }

// getItems(["banana", "apple"], "pear", "orange","straw");  //fruitList = ["banana", "apple"]; favoriteFruit="pear"; args=["orange", "straw"];


// let person = { name: 'Lydia' };
// const members = [person];
// person = null;     //person variable is now referencing to null, members[0] is still referencing to object.

// console.log(members);  //output=[{ name: "Lydia" }]
//First, we declare a variable person with the value of an object that has a name property.
//Then, we declare a variable called members. We set the first element of that array equal to the value of the person variable. 
//Objects interact by reference when setting them equal to each other. When you assign a reference from one variable to another,
//you make a copy of that reference. (note that they don't have the same reference!)
//Then, we set the variable person equal to null.
//We are only modifying the value of the person variable, and not the first element in the array, 
//since that element has a different (copied) reference to the object. 
//The first element in members still holds its reference to the original object. When we log the members array, 
//the first element still holds the value of the object, which gets logged.


// const value = { number: 10 };

// const multiply = (x = { ...value }) => {
//   console.log((x.number *= 2));
// };

// multiply();   //20  here value is copied because of setting default parameter which copies from the spread operator if no value is passed
// multiply();   //20  same case, it does not change the object, as it does not have a reference to the object
// multiply(value);  //20 but here, we pass value, which is a reference to the object, which changes the object permanently
// multiply(value);  //40
// multiply(); //80
// multiply(); //80
// multiply(); //80
// multiply(value); //80  again, changes the object permanently
// multiply(value); //160

//In ES6, we can initialize parameters with a default value. The value of the parameter will be the default value, 
//if no other value has been passed to the function, or if the value of the parameter is "undefined". 
//In this case, we spread the properties of the value object into a new object, so x has the default value of { number: 10 }.
//The default argument is evaluated at call time! Every time we call the function, a new object is created. 
//We invoke the multiply function the first two times without passing a value: x has the default value of { number: 10 }. 
//We then log the multiplied value of that number, which is 20.

//The third time we invoke multiply, we do pass an argument: the object called value. 
//The *= operator is actually shorthand for x.number = x.number * 2: we modify the value of x.number, and log the multiplied value 20.

//The fourth time, we pass the value object again. x.number was previously modified to 20, so x.number *= 2logs 40.


// function changeAgeAndReference(person) {
//     person.age = 25;
//     person = {                 //here changing the reference of person to another object instead of Obj1
//       name: 'John',
//       age: 50
//     };

//     return person;
// }

// const personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// const personObj2 = changeAgeAndReference(personObj1);  //passing the reference of Obj1 to the function as person parameter
                                                         //this can change Obj1 permanently

// console.log(personObj1); // -> {name: 'Alex', age: 25}
// console.log(personObj2); // -> {name: 'John', age: 50}

//The function first changes the property age on the original object it was passed in. 
//It then reassigns the variable to a brand new object and returns that object. Here’s what the two objects are logged out.

// const first_person = {
//     name: "Jack",
//     age: 24,
//     address: {
//       apartment: "A",
//       city: "London"
//     }
//   };
  
//   const second_person = { ...first_person };
  
//   second_person.age = 25; 
//   console.log(first_person);  //here, age is 24
  
//   console.log(second_person); //here, age is 25, so it is deep copy
  
//   second_person.address.apartment = "N";  //but using nested object, it becomes shallow copy
                                      //as the nested object inside(address) passes its reference when main object is copied by spread operator
//   console.log(first_person.address.apartment); // output: N
//   console.log(second_person.address.apartment); // output: N

// const first_person = {
//     name: "Jack",
//     age: 24,
//     address: {
//       apartment: "A",
//       city: "London"
//     }
//   };
  
//   const second_person = JSON.parse(JSON.stringify(first_person));  //deep copy even if having nested objects
  
//   second_person.age = 25;
//   second_person.address.apartment = "N";
//   console.log(first_person);
//   console.log(second_person);


//this keyword practice
// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }
  
//   let user = makeUser();
  
//   alert( user.ref.name ); // What's the result? nothing because this refers to window object, to fix it use it within a function

//   function makeUser() {
//     return {
//       name: "Piyush Agarwal",
//       ref() {         
//         return this;
//       }
//     };
//   }
  
//   let user = makeUser();
  
//   alert( user.ref().name ); // Piyush Agarwal

// const user = { 
//     name: 'Piyush Agarwal!', 
//     logMessage() { 
//         console.log(this.name); 
//    }
//  }; 
//  setTimeout(user.logMessage, 1000); // returns nothing
//While `setTimeout()` function uses the `object.logMessage` as a callback, still, it invokes `object.logMessage` as a regular function, rather than a method.
//And during a regular function invocation *this* equals the global object which is `window` in the case of the browser environment.
//That's why `console.log(this.message)` inside `logMessage` method logs `window.message`, which is `undefined`.

// const user = { 
//     name: 'Piyush Agarwal!', 
//     logMessage() { 
//         console.log(this.name); 
//    }
//  }; 
//   setTimeout(function (){
//     user.logMessage();
//   }, 1000); // returns "Piyush Agarwal!"

// let calculator = { 
//      sum() { return this.a + this.b; },

//     mul() { return this.a * this.b; },

//     read() { 
//         this.a = +prompt('a?', 0);    //plus in prompt is for taking input as number instead of string
//         this.b = +prompt('b?', 0); 
//     }
//  };

// calculator.read(); 
// alert( calculator.sum() ); 
// alert( calculator.mul() );




  
    
    









