import React from 'react'
import {useState, useRef, useEffect} from 'react'

export default function Useref() {
  const [name,setName]=useState('');
  const [title,setTitle]= useState('');
  const renderCount = useRef(1);
  const inputRef = useRef();
  const prevName = useRef('');
  const prevTitle = useRef('');

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  })
  useEffect(()=>{
    prevName.current= name;

  },[name])
  
  function focus(){
    inputRef.current.focus();
  }

  function changeTitle(){
    setTitle(name);
  }
useEffect(()=>{
    prevTitle.current = title;
},[title])


  return (
    <div className="App">
     <input ref={inputRef} value={name} onChange={e=>setName(e.target.value)}/>
     <div>My name is {name} and it used to be {prevName.current}</div>
     <div>I rendered {renderCount.current} times</div>
     <button onClick={focus}>Focus</button>
     <hr/>
     <input value={title}/>
     <button onClick={changeTitle}>Change Title</button>
     <div>My name is {title} and it used to be {prevTitle.current}</div>

    </div>
    
  );
}

