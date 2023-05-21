//q1
// let a=function(a,b){
//     return (a+b);
// }
// console.log(a(5,2));

//q2
// let b = function(str){
//     return (str.length);
// }
// console.log(b("India"));

//q3
// let c=function maths(a,b){
//     let sum=a+b;
//     let diff=a-b;
//     let product=a*b;
//     let quotient=a/b;
//     console.log(sum, diff, product, quotient);
// }
// c(10,5);

//q4
// let d=function max(a,b){
//     let max=Math.max(a,b);
//     console.log(max);
// }
// d(9,8);

//q5
// let e=function rev(str){
//     let rev=str.split("").reverse().join("");
    
//     console.log(rev);
// }
// e("bat");

//q6
// let f= function(num){
// if(num>0)
// console.log("positive");
// else if(num===0)
// console.log("zero");
// else console.log("Negative");
// }
// f(5);

//q7
// let g = function(num){
//     for(let i=1;i<=10;i++){
//         console.log(`${num} * ${i} = ${num*i}`);
//     }
// }
// g(7);

//q8
// let h=function(num){
//     let sum=0;
    
//     for(let i=1;i<=num;i++){
//         sum=sum+i;
//     }
//     return sum;
// }
// console.log(h(10));

//q9
// let i=function(str){
//     let vow=["a","e","i","o","u"];
//     let count=0;
//     for(let i=0;i<str.length;i++){
//         if(vow.includes(str[i].toLowerCase()))
//         count++;

//     }
//     console.log(count);
// }
// i("I am checking the vowel count");

//q10
// let j=function(ar1,ar2){
//     let ca=[];
//     for(let i=0;i<ar1.length;i++){
//         if(ar2.includes(ar1[i])){
//             if(!ca.includes(ar1[i]))
//             ca.push(ar1[i]);
//         }
//     }
//     ca.sort((a,b)=>a-b);
//     return ca;
// }
// const ar1 = [1, 2, 3, 4, 5];
// const ar2 = [3, 4, 5, 6, 7];
// let ans=j(ar1,ar2);
// console.log(ans);