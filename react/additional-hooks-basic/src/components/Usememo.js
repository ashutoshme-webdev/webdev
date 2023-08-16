import React from 'react'
import {useState, useMemo, useEffect} from 'react'

function Usememo() {
  const [num,setNum]=useState(1);
  const [long_number,setLong_number]=useState(10);
  const [dark, setDark] = useState(false);

  const long_function=  useMemo(()=>{
    return fun(long_number);
  },[num]);

  const theme = useMemo(()=>{      
    return{
        backgroundColor : dark ? 'black' : 'white',
        color : dark ? 'white' : 'black'
    }
  },[dark]);

  useEffect(() => {
    console.log("theme changed");
  }, [theme]);
  

  return (
    <div className="App">
      <button onClick={()=>setNum(num-1)}>-</button>
      <div>{num}</div>
      <button onClick={()=>setNum(num+1)}>+</button>
      <div>{long_number}</div>
      <button onClick={()=>setLong_number(long_number*2)}>x2</button>
      <div style={theme}>{long_number}</div>
      <button onClick={()=>setDark(prev=>!prev)}>change theme</button>


    </div>
    
  );
}
function fun(num){
  for(let i=0;i<1000000000;i++){

  }
  return num*2;
}
export default Usememo;
