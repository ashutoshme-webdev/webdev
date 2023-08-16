import React,{useState} from 'react'

export default function Usereducer(){
    const [count, setCount] = useState(0);
    return(
        <div>
            <p>{count}</p>
            <button>-</button>
            <button>+</button>
        </div>
    )
}