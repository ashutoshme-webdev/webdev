const countValue = document.getElementById('counter');
let value=parseInt(countValue.innerText);
let plus=document.getElementById('plus');
let minus=document.getElementById('minus');


// function increment(){
//     // get the vlue from UI
//     let value = parseInt(countValue.innerText);
//     //Update the value
//     value = value + 1;
//     //set the value onto UI
//     countValue.innerText = value;
// };


// function decrement(){
//         // get the vlue from UI
//         let value = parseInt(countValue.innerText);
//         //Update the value
//         value = value - 1;
//         //set the value onto UI
//         countValue.innerText = value;
// };

plus.addEventListener('click',function(){
  value=value+1;
  countValue.innerText=value;
});
minus.addEventListener('click',function(){
  value=value-1;
  countValue.innerText=value;
});
