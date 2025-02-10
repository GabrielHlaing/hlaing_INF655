import React from "react";

export default function TaskComponent(){
    const tasks = [
        'do paperwork', 'work on coding', 'go to college', 'talk to professor'
    ];

    const getRandomTask = () => {
        const randomTask = Math.floor(Math.random() * 4);
        return tasks[randomTask];
    };
    return(
        <h3>Hello student, your task is to {getRandomTask()}.</h3>
    )
}