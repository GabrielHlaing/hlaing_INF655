import React, { useState } from 'react';

export default function TaskForm(){
    const [name, setName] = useState("");

    function handleClick(event){
        event.preventDefault();
        console.log({name});
    }

    return(
        <form>
            <label>Enter Task Name: 
                <input 
                type='text' value={name}
                onChange={(e)=> setName(e.target.value)}
                />
            </label>
            <button className='btn' onClick={handleClick}>Add Task</button>
        </form>
    )
}