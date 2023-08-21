console.log("Learning javascript");
// let Swe=4645;
// console.log(Swe); checking for non-camelcase


// let a = true;
// console.log(a);

// const num = 12;
// //num = 13;

// let lastName = 3;
// console.log(lastName);

// lastName = true;
// console.log(lastName);

// var as=7;

// console.log(as)
// var as=false;
// console.log(as);
// let obj={
//     firstName: 'Ash',
//     lastName: 'Ketchup'
// };
// console.log(obj.firstName)
// console.log(obj['lastName'])

// let nums=[5,8,9,3];
// console.log(nums[2]);
// nums[4]=75;
// nums[1]=88;
// console.log(nums)


// console.log(5 !== 3);

// let age = 27;
// let status = (age >= 18) ? 'Yes Vote' : 'No Vote';

// console.log(status);

// let marks = 12;

// if(marks >= 90) {
//     console.log('A');
// }
// else if(marks >= 80) {
//     console.log('B');
// }
// else if(marks >=70) {
//     console.log('C');
// }
// else if(marks >= 60) {
//     console.log('D');
// }
// else {
//     console.log('E');
//}

//  let num = 42;

// switch(num) {
//     case 'ab': console.log('First');
//     break;
//     case "a": console.log('B');
//     break;
//     case 3: console.log('C');
//     // break;
//     default: console.log('D');
//     case 4: console.log(25)
// }

// for(let i = 1; i<=5; i=i+1) {
//     console.log("element" + i);
// }

// let x = 1;

// while(x <= 5) {
//     console.log(x);
//     x++;
// }

// let y = 7;

// do {
//     console.log(y);
//     y++;
// } while(y < 10);



// object create
// let rectangle = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };

// rectangle.draw();
// console.log(rectangle['breadth']);
// rectangle.shape='2d';
// console.log(rectangle);
// rectangle.erase=function(){
//     console.log('erasing rectangle');
// }
// rectangle.erase();


//factory function 

// function createRectangle(len, bre) {

//     const rectangle = {
//         length: len,
//         breadth:bre ,

//         draw() {
//             console.log('drawing rectangle '+rectangle.breadth+'*'+rectangle.length);
//         }
//     };
//     return rectangle;
// }

// let rectangleObj1 = createRectangle(5, 4);
//  let rectangle2 = createRectangle(2,3);
//  console.log(rectangle2.draw());
// let rectangle3 = createRectangle(7,9);

//Camelcase -> numberOfStudents
//constructor function -> Pascal Notation -> first letter of every word is Capital -> NumberOfStudents
//constructor function -> prop/methods -> intialise/Define
// function Rectangle(len, bre) {
//     this.length = len;
//     this.breadth = bre;
//     this.draw= function() {
//         console.log('drawing');
//     }
// }

// Rectangle. //Rectangle function has both properties and method, so functions are also objects

// //object creation using constructor function
// let rectangleObject = new Rectangle(4,6);
// console.log(rectangleObject.constructor);
// delete rectangleObject.breadth;
// rectangleObject.color = 'yellow';
// console.log(rectangleObject);

// delete rectangleObject.color;
// console.log(rectangleObject);

// let Rectangle1 = new Function(
//     'length', 'breadth',
// `this.length = length;
// this.breadth = breadth;
// this.draw= function() {
//     console.log('drawing');
// }`);

// //object creation using Rectangle1
// let rect = new Rectangle1(2,3);

// rect.length;

// console.log(rect);


// rectangle.length;
// rectangle.breadth;

// rectangle.draw();

// let rectangle1 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };


// let rectangle2 = {
//     length: 1,
//     breadth: 2,

//     draw: function() {
//         console.log('drawing rectangle');
//     }
// };


// let a = 10;
// let b = a;

// a++;
// console.log(a);
// console.log(b);


// let a = { value: 10};
// let b = a;

// a.value++;

// console.log(a.value);
// console.log(b.value);

// let a = 10;

// function inc(a) {
//     a++;
// }

// inc(a);

// console.log(a);

// let a = {value:10 };

// function inc(a) {
//     a.value++;
// }

// inc(a);

// console.log(a.value);

// let rectangle = {
//     length:2,
//     breadth:4
// };

//for-in loop  //generally applied on objects
// for(let key in rectangle ) {
//     //keys are reflected through key variable 
//     //values are reflected through rectangle[key]
//     console.log(key,rectangle[key]);
// }

//for-of loop  // only works on iterables - arrays, maps, string.   hack->to make it work on objects below
// for(let key of Object.keys(rectangle)) {     //here the Object.keys makes an array of objects with keys of the object
//     console.log(key,rectangle[key]);
// }

// for(let key of Object.entries(rectangle)) {     //here the Object.entries makes an array of objects with key:value pairs of the object
//         console.log(key);
//     }

// if('length' in rectangle) {
//     console.log('Present');
// }
// else {
//     console.log('Absent');
// }


//object - clone #1 through iterating
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let dest = {};

// for(let key in src) {
//     dest[key] = src[key];
// }

// console.log(dest);

// src.a++;
// src.b--;
// dest.c++;
// console.log(src)
// console.log(dest);

//Object Cloning #2 through assign function
// let src = {
//     a:10,
//     b:20,
//     c:30
// };

// let src2 = { value: 25};

// let dest = Object.assign({}, src, src2);

// console.log(dest);

// src.a++;

// console.log(src)
// console.log(dest);

//Object Cloning #3
// let src = {
//     a: 10,
//     b:20,
//     c:30
// };

// let dest = {...src};

// console.log(dest);

// src.a++;
// console.log(dest);

// let a=Math.random();
// a=Math.abs(-3);
// a=Math.cbrt(64);
// a=Math.sqrt(25);
// a=Math.ceil(-4.5);
// a=Math.floor(9.3);
// a=Math.min(5,1);
// a=Math.max(5,2);
// a=Math.pow(2,10);
// a=Math.round(4.5);
// console.log(a);

// let lastName = 'Babbar' ;


// let firstName = new String('Love');

// let message = 
// `Hello ${lastName},

// Thanks for the     Opportunity

// Regards,
// Babbar`;

// console.log(message);

// let words = message.split(' ');

// console.log(words);

// let date = new Date();


// let date2 = new Date('June 20 1998 07:15');

// let date3 = new Date(1998, 5, 20, 7);


// date3.setFullYear(1947);

// console.log(date3);

// let numbers = [1,4,5,7];

// console.log(numbers);

// //end -> push
// //beginning -> unshift

// //middle -> splice

// //Searching
// console.log(numbers);

// console.log(numbers.indexOf(9));

// //we want to check if a number exist in an array
// if(numbers.indexOf(4) != -1) 
//     console.log("present");

// console.log(numbers.includes(7));

// console.log(numbers.indexOf(7, 2) );   //here 2 is the starting index to start search from


// let courses = [
//     {no:1, naam:'Love'},
//     {no:2, naam:'Rahul'}
// ];

// console.log(courses);

// console.log( courses.includes( {no:1, naam:'Love'} ) );

// let course =  courses.find(course => course.naam === 'Kilvish');  //callback function

// function(course) {
//     return course.naam === 'Love';
// }

// console.log(course);

// let numbers = [1,2,3,4,5,6,7];

// //end
// numbers.pop();
// //beginning
// numbers.shift();
// //middle
// numbers.splice(2, 1);

// // console.log(numbers);

// let numbers = [1,2,3,4,5];
// let numbers2 = numbers;

// //numbers = [];
// //numbers.length = 0;
// numbers.splice(0,numbers.length);

// console.log(numbers);
// console.log(numbers2);

// let first = [1,2,3];
// let second = [4,5,6];

// let combined = first.concat(second);
// console.log(combined);

// let marks = [10,20,30,40,50,60,70,80];
// let sliced = marks.slice();
// let sliced = marks.slice(2);
// let sliced = marks.slice(2,6);
// console.log(sliced);
// console.log(marks);

// let ar1=[{len: 5, bre: 10}, {len:3, bre:6}];
// let ar2=[{rad:50, area:100}, {rad:25, area:75}];
// let combined=ar1.map((item,i)=>{
//     return Object.assign({},item,ar2[i]);
// });
// ar1.naam="Hello";
// ar2.car="benz";

// console.log(ar1)
// console.log(ar2)
// console.log(combined);


// let first = [1,2,3];
// let second = [4,5,6];

// let combined = [...first,'a', false, ...second ,'b', true];
// console.log(combined);

// //copy kaise create karu
// let another = [...combined];

// let arr = [10,20,30,40,50];

// for(let value of arr) {
//     console.log(value);
// }

// arr.forEach(number=> console.log(number));



// let numbers = [10,20,30,40,50];
// const joined = numbers.join(' ,');

// console.log(joined);

// let message = 'This is my first message';
// let parts = message.split(' ');

// console.log(parts);

// let joined = parts.join('_');
// console.log(joined);


// let numbers = [5,10,4,40];

// numbers.sort();

// console.log(numbers);

// numbers.reverse();
// console.log(numbers);


// let numbers = [1,2,-1,-4];

// let filtered =  numbers.filter(value => value >= 0);

// console.log(filtered);


// let numbers = [7,8,9,10];
// console.log(numbers);

// let items = numbers.map(value => 'student_no' + value);

// console.log(items);

// let numbers = [1,2,-6,-9];

// let items = numbers
//             .filter(value => value >= 0)
//             .map(num => {value: num});

// console.log(items);



// //function call or invoke
// run();


// //function declaration   // hoisting works only on function declaration
// function run() {
//     console.log('running');
// }


// stand();

// //Named function assignment
// let stand = function walk() {
//     console.log('walking');
// };

// //Anonymous function assignment
// let stand2 = function() {
//     console.log('walking');
// };

// stand();

// let jump = stand;

// jump();

// stand2();
// console.log(c);
// let a=2;
// let b=3;
// var c;
// c=a+b;

// let x = 1;
// x = 'a';

// console.log(x);


// function sum() {
//     let total = 0;
//     for(let value of arguments) 
//         total = total + value;
//     return total;
// }

// // console.log(sum(1,2));
// //console.log(sum(1));
// // console.log(sum());
// //console.log(sum(1,2,,3,4,5));

// let ans = sum(1,2,2,3);
// console.log(ans);

//Rest Operator

// function sum(num, value, ...args) {
//     console.log(args);
// }

// sum(1,2,3,4,5,6);


//Default Parameters
// function interest(p,r=6,y=9) {
//     return p*r*y/100;
// }

//GETTER SETTER

//getter -> access properties
//setter -> change or mutate properties

//console.log(interest(1000,undefined, 8));

// let person = {
//     fName : 'Love',
//     lName : 'Babbar',
//     get fullName() {
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value) {
//         if(typeof value !== String) {
//             throw new Error("You have not sent a string");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
        
//     }
// };



//  console.log(person);

 


//issue - > read only


// console.log(person.fullName);
// try {
//     person.fullName = true;
// }
// catch (e) {
//     alert(e);
// }


// console.log(person.fullName);


// {
//     var a = 5;
// }
// console.log(a);

// function walk() {
//     var a = 5;
// }

// console.log(a);

// for(var i = 0; i<10; i++) {

// }

// console.log(i);

// if(true) {
//     var a = 5;
// }

// console.log(a);

// function a() {
//     const ab  = 5;
// }
// const ab = 5;
// function b() {
//     const ab = 5;
// }

//sorting 
// let a = [10,5,4,25];

// a.sort(function(a,b) {
//     return a-b;
// });

// console.log(a);

// let arr = [-1,-2,-3,-4];
// let total = 0;

// for(let value of arr) 
//     total = total + value;

// console.log(total);


// let totalSum = arr.reduce((accumulator, currentValue) => accumulator + currentValue,0);

// console.log("PRINTING TOTAL SUM:")
// console.log(totalSum);


// let p1=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('first');
        
//     }, 0);
// });
// let t1=performance.now();
// console.log(t1)
// let p2=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('second');
        
//     }, 0);
// });
// let t2=performance.now();
// console.log(t2)
// console.log('cns');


// let p1=new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('first');
        
//     }, 10);
//     resolve(true);
// });
// let output=p1.then(() => {
//     let p2=new Promise((resolve, reject)=>{
//         setTimeout(() => {
//             console.log('second');
//         }, 10);
//         resolve("sent response");
//     })
//     return p2;
// });
// output.then((val) => {
//     console.log(val);
// });
//  async function util(){
//  let a = await fetch('https://jsonplaceholder.typicode.com/todos/1')

//  console.log(a.text());
// }
// util();


//repeat callback function properly , combining/slicing array of objects javascript basic lec 3 page - 11/16
//argument object , why for of used in it, sort function with compare, promise, fetch api, async/await, json


//practice
// console.log(a);
// const a =5;
// {
// const a = 6;
// // const a=5;
// // let a=5;
// console.log(a);


// }
// console.log(a);

// let a ;
// console.log(a);
// let a=3;
