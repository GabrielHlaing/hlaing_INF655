import React from 'react'
import {useState} from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);

    function handleClick(){
        setCount(count + 1);
    }

    return (
    <div>
        <h4>Count: {count}</h4>
        <button onClick={handleClick}>Click Me!</button>
    </div>
  )
}
