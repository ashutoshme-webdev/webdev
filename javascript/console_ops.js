let a={}
let b={}
let c=[]
let d=[]


console.log(a); //{...}
console.log(typeof(a)); //"object"
console.log(+a);//NaN
console.log(typeof(+a));//"number"
console.log(-a);//NaN
console.log(typeof(-a));//"number"
console.log(""+a) //"[object Object]"
console.log(typeof(""+a)) //"string"
console.log(""-a) //NaN
console.log(typeof(""-a)) //"number"
console.log(a+b); //"[object Object][object Object]"
console.log(typeof(a+b)) //"string"
console.log(a-b); //NaN
console.log(typeof(a-b)) //"number"


console.log(c); //[]
console.log(typeof(c)); //"object"
console.log(+c); //0
console.log(typeof(+c)); //"number"
console.log(-c); //0
console.log(typeof(-c)); //"number"
console.log(""+c); //""
console.log(typeof(""+c)); //"string"
console.log(""-c); //0
console.log(typeof(""-c)); //"number"
console.log(c+d); //""
console.log(typeof(c+d)); //"string"
console.log(c-d); //0
console.log(typeof(c-d)); //"number"

console.log(a+c); //"[object Object]"
console.log(typeof(a+c)) //"string"
console.log(a-c); //NaN
console.log(typeof(a-c)) //"number"
console.log(c-a); //NaN
console.log(typeof(c-a)) //"number"


console.log('a'+'b'); //"ab"
console.log(typeof('a'+'b')); //"string"
console.log('a'-'b'); //NaN
console.log(typeof('a'-'b')); //"number"
console.log(+'a'); //NaN
console.log(typeof(+'a')); //"number"
console.log(-'a'); //NaN
console.log(typeof(-'a')); //"number"
console.log('b'+'a'+ +'b' +'a'); //"baNaNa"
console.log('b'+'a'- -'b' +'a'); //"NaNa"
console.log('b'- +'a' -'b' +'a'); //"NaNa"
console.log(NaN +'a'); //"NaNa"
console.log(NaN -'b'+'c'); //"NaNc"
console.log(NaN -'b'-'c'); //NaN
console.log(NaN -'b'+'c'+ +'c'); //"NaNcNaN"
console.log(a+ c-b); //NaN
console.log(NaN +'b'-'c'); //NaN

console.log('5' + -5); //"5-5"
console.log('5' - -5); //10
console.log('5' - 5); //0
console.log(+'5' + 5); //10
console.log(5 + -'5'); //0
console.log(5 - '-5'); //10
console.log(5 - +'5'); //0
console.log('5'+'5'); //"55"
console.log('5'-'5'); //0


//Explanation
// + is used for concatenation of strings if one item/element is a string;
// but it converts a number into string after it encounters a string, before it reaches the string, it treats all numbers as numbers only.
console.log(5+5+'5'); //105  --> '10'+'5'
// in above example, 5+5 is first calculated normally, but after it reaches '5', it converts the number as string 
console.log(5+5+5+'5'+5); //1555 --> '15'+'5'+'5'
console.log('5'+5+7); //557  --> '5'+'5'+'7'


// + before an item is shorthand rule for parseInt(item);
// Ex- console.log(+a) = console.log(parseInt(a));
console.log(parseInt(a)); //NaN since a is not a number
console.log(parseInt(5)); //5
console.log(parseInt('5')); //5
console.log(+'5'+5+7); //17  --> 5+5+7
// here, +'5'  converts '5' into 5


// - before an item is parseInt(-(item));
// Ex- console.log(-a) = console.log(-parseInt(-(a)));
console.log(parseInt(-a)); //NaN since -a is not a number, NaN in case of both empty/non-empty object and non-empty array, but parseInt of empty array gives 0
console.log(parseInt(-5)); //-5
console.log(parseInt('-5')); //-5
console.log(-'5'+5+7); //17  --> -5+5+7
// here, -'5'  converts '5' into -5
// -'5' --> -(+'5') = -5
console.log('5' + -'5'); //"5-5"  --> '5'+ -5 --> '5' + '-5' --> '5-5'
console.log('5' + -'-5'); //"55"  --> '5'+ -(-5) --> '5' + '5' --> '55'
console.log('1'+10+100) //"110100" --> '1' + '10' +100 --> '110' + '100' --> '110100'
console.log('1'+10-100) // 10 --> '1' + '10' -100 --> '110' - 100 --> 110 - 100 --> 10
console.log('3'+3*2) // "36" --> '3' + 6 --> '36'
console.log('3'+3/2) // "31.5" --> '3' + 3/2 --> '3' + 1.5 --> '31.5' 

console.log(-a+"") //"NaN" -->NaN+"" + "NaN"
console.log(-a-"") //NaN
// In Javascript, operations are execution/computation from left to right, so the positioning of +/- matters a lot while executing the code

console.log(5+5-'7'+'8'-'3'); //35 -->10-7 +'8' - '3' -->38-'3'-->35
// + converts numbers to string but - converts string to number
// + and - both can change the type of the expression, final type will depend on the last/rightest operand(+/-)
// Note: +/- is used for both parseInt and converting the type of expression
// an extra +/- is used for parseInt otherwise it converts the type of expression
// Note: +/- only converts expression where a string is present otherwise it just calculates the expression as a number

let e=[1,2] //non-empty array
let f=[3,4] //non-empty array
let g=[1,2,3] //non-empty array
let h=[4,5,6] //non-empty array
let i=[7,8,9] //non-empty array
console.log(+e); //NaN, in case of empty array it is 0
console.log(-e); //NaN, in case of empty array it is 0
console.log(""+e); //"1,2"
console.log(""-e); //NaN
console.log(e+f); //"1,23,4" --> '1,2' + '3,4' --> '1','2'+'3','4' --> '1,23,4'
console.log(e-f); //NaN
console.log(g+h); //"1,2,34,5,6" --> '1,2,3' + '4,5,6' --> '1','2','3'+'4','5','6' --> '1,2,34,5,6'
console.log(g-h); //NaN
console.log(g+h+i) // "1,2,34,5,67,8,9" --> '1,2,3' + '4,5,6' + '7,8,9' --> '1',2','3'+'4','5','6'+'7',8','9' --> '1,2,34,5,67,8,9'
console.log(-g+h+i); //"NaN4,5,67,8,9"
console.log(c-d+i); //"NaN7,8,9"
console.log(g+h-i); //NaN





































