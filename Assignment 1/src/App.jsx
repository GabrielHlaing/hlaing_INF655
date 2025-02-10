import './App.css'
import Greeting from './components/Greeting'
import UserInfo from './components/UserInfo'
import TaskComponent from './components/TaskComponent';

function App() {

  return (
    <div className='App'>
      <Greeting />
      <UserInfo />
      <TaskComponent />
    </div>
  );
}

export default App
