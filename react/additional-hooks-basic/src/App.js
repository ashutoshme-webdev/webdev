import './App.css';
import React from 'react'
import {useState} from 'react'
import Usememo from './components/Usememo';
import Useref from './components/Useref';
function App() {
  const [num,setNum]=useState(1);
  const [long_number,setLong_number]=useState(10);
  const long_function=  fun(long_number);

  return (
    <div className='App'>

      {/* <Usememo/> */}
      <Useref/>
      
    </div>
    
  );
}
function fun(num){
  for(let i=0;i<1000000000;i++){

  }
  return num*2;
}
export default App;
