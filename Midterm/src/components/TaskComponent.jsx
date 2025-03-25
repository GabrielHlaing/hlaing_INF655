import React, { useState } from "react";

export default function TaskComponent({tasks, deleteTask, setTasks}) {

    const [searchTerm, setSearchTerm] = useState("");

    // Filter tasks based on search input
    const filteredTasks = tasks.filter(task =>
        task.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Sort tasks alphabetically
    const sortTasks = () => {
        const sortedTasks = [...tasks].sort();
        setTasks(sortedTasks);
    };

    return (
        <div>
            
            {/* Search Input */}
            <input
                type="text"
                placeholder="Search Tasks"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            {/* Display Filtered Tasks */}
            <ul>
                {
                    filteredTasks.map((task, index) => 
                    <li key={index}>
                        {task}
                        <button 
                            onClick={() => deleteTask(task)} 
                            className="deleteBtn">
                            Delete
                        </button>
                        </li>)
                }
            </ul>

            <button onClick={sortTasks}>
                Sort by Name
            </button>
        </div>
    );
}
