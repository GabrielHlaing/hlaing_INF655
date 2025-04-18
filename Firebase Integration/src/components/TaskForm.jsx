import { useState, useEffect } from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  limit,
  orderBy,
  query,
} from "firebase/firestore";
import { auth, db } from "../firebase";

export default function TaskForm() {
  const [taskList, setTaskList] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [error, setError] = useState("");

  const user = auth.currentUser;

  // Fetch tasks from Firebase on component mount
  useEffect(() => {
    const fetchTasks = async () => {
      if (!user) return;

      try {
        const taskListRef = collection(db, "users", user.uid, "taskList");
        const q = query(taskListRef, orderBy("createdAt", "desc"), limit(10));
        const querySnapshot = await getDocs(q);
        const userTasks = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTaskList(userTasks);
      } catch (error) {
        console.error("Error Fetching Task List", error);
      }
    };

    fetchTasks();
  }, [user]);

  // Handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (taskName === "" || taskDescription === "") {
      setError("Task name and description cannot be empty.");
      return;
    }

    setError("");

    const newTask = {
        taskName,
        taskDescription,
        uid: user.uid,
        createdAt: new Date()
      };

      try {
        const docRef = await addDoc(collection(db, "users", user.uid, "taskList"), newTask);
        const savedTask = { ...newTask, id: docRef.id };
        setTaskList([...taskList, savedTask]);
        setTaskName("");
        setTaskDescription("");
      } catch (err) {
        console.error("Error adding document: ", err);
      }
  };

  // Delete task from Firebase and UI
  const handleDelete = async (taskId) => {
    if (window.confirm("Do you want to delete this task?")){
        try {
            await deleteDoc(doc(db, "users", user.uid, "taskList", taskId));
            setTaskList(taskList.filter((task) => task.id !== taskId));
          } catch (err) {
            console.error("Error deleting task:", err);
          }
  }
};

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Name:</label>
          <input
            type="text"
            placeholder="Enter Task Name"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
        </div>

        <div>
          <label>Task Description:</label>
          <input
            type="text"
            placeholder="Enter Task Description"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
          />
        </div>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit" style={{backgroundColor: "aqua"}}>Add Task</button>
      </form>

      <h3>Task List:</h3>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            <strong>{task.taskName}</strong>: {task.taskDescription}
            <button
              style={{ marginLeft: "10px", color: "white", backgroundColor: "red", border: "none", margin: "1px", cursor: "pointer" }}
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
