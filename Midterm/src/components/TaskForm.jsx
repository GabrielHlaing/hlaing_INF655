import React, { useState } from 'react';

export default function TaskForm() {
    const [taskList, setTaskList] = useState([]); // Task list state
    const [taskName, setTaskName] = useState(""); // Task name state
    const [taskDescription, setTaskDescription] = useState(""); // Task description state
    const [error, setError] = useState(""); // Error state for validation

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation: Ensure both fields are filled
        if (taskName === "" || taskDescription === "") {
            setError("Task name and description cannot be empty.");
            return;
        }
        
        setError(""); // Clear error if inputs are valid

        const newTask = {
            taskName,
            taskDescription,
        };

        setTaskList([...taskList, newTask]);

        // Clear input fields after submission
        setTaskName("");
        setTaskDescription("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Task Name: </label>
                    <input 
                        type='text'
                        placeholder='Enter Task Name' 
                        value={taskName}
                        onChange={(e) => setTaskName(e.target.value)}
                    />
                </div>

                <div>
                    <label>Task Description: </label>
                    <input 
                        type='text'
                        placeholder='Enter Task Description' 
                        value={taskDescription}
                        onChange={(e) => setTaskDescription(e.target.value)}
                    />
                </div>

                {/* Display validation error */}
                <p style={{ color: "red" }}>{error}</p>

                <button type='submit'>Add Task</button>
            </form>

            {/* Display the Task List */}
            <h3>Task List:</h3>
            <ul>
                {taskList.map((task, index) => (
                    <li key={index}>
                        <strong>{task.taskName}</strong>: {task.taskDescription}
                    </li>
                ))}
            </ul>
        </div>
    );
}
