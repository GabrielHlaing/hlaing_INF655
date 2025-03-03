import './App.css';
import React from 'react';
import Greeting from './components/Greeting';
import UserInfo from './components/UserInfo';
import TaskComponent from './components/TaskComponent';
import Counter from './components/Counter';
import TaskForm from './components/TaskForm';

function App() {
  function taskList(){
    const tasks = ["Do Project", "Work on Assignment", "Read Lecture", "Clean the house", "Build a Website"];
    return(
      <ul>
        {
          tasks.map((task, index) =>(
            <li key={index}>{task}</li>
          ))
        }
      </ul>
    );
  }

  function handleAlert(){
    alert("This alert appears because you clicked the button.");
  }

  return (
    <div className='App'>
      <Greeting username="Alice"/>
      <Greeting username="Bob"/>
      <Counter />

      <div>{taskList()}</div>
      
      <TaskForm />
      <UserInfo handleClick = {handleAlert}/>
      <TaskComponent />
    </div>
  );
}

export default App
