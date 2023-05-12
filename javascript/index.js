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
//     console.log(key);
// }

// for(let key of Object.entries(rectangle)) {     //here the Object.entries makes an array of objects with key:value pairs of the object
    //     console.log(key);
    // }

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