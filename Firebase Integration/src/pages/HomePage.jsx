import React, {useState} from 'react';
import Greeting from '../components/Greeting';
import UserInfo from '../components/UserInfo';
import TaskComponent from '../components/TaskComponent';
import Counter from '../components/Counter';
import TaskForm from '../components/TaskForm';

export default function HomePage() {
  function taskList(){
    const theTasks = ["Do Project", "Work on Assignment", "Read Lecture", "Clean the house", "Build a Website"];
    return(
      <ul>
        {
          theTasks.map((task, index) =>(
            <li key={index}>{task}</li>
          ))
        }
      </ul>
    );
  }

  function handleAlert(){
    alert("This alert appears because you clicked the button.");
  }

  // For deleting the task list
  const [tasks, setTasks] = useState([
    "Do paperwork",
    "Work on coding",
    "Go to college",
    "Talk to professor",
    "Buy groceries",
    "Buy office supplies",
    "Attend team meeting",
    "Submit project report",
    "Clean the house",
    "Prepare presentation slides"
  ]);

  // Function to delete a task with confirmation
  function deleteTask(taskToDelete) {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${taskToDelete}"?`);
    if (confirmDelete) {
        setTasks(tasks.filter(task => task !== taskToDelete));
    }
}

  return (
    <div className='App'>
      <Greeting username="Alice"/>
      <TaskForm />
      <Counter />
      <div>{taskList()}</div>
      <UserInfo handleClick = {handleAlert}/>
      <TaskComponent tasks={tasks} setTasks={setTasks} deleteTask={deleteTask}/>
    </div>
  );
}
