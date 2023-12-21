import React, {useState, useEffect} from 'react'
import "./App.css" 
import TaskFrom from './Component/TaskFrom';
import TaskColumn from './Component/TaskColumn';
import todoIcon from "./assets/direct-hit.png"
import doingIcon from "./assets/glowing-star.png"
import doneIcon from "./assets/check-mark-button.png"

const oldTasks = localStorage.getItem("tasks")
console.log(oldTasks )

const App = () => {
const [tasks, setTasks] = useState(JSON.parse(oldTasks) || [])

useEffect(()=>{
  localStorage.setItem("tasks", JSON.stringify(tasks))
},[tasks])

const handleDelete = (taskIndex) => {
const newTasks = tasks.filter((task, index) => 
 index !== taskIndex  
)
setTasks(newTasks)
}
return (
    <div className='app'>
      <TaskFrom setTasks={setTasks}/>
      <main className="app-main">
        <TaskColumn 
        title="To Do" 
        icon={todoIcon}
        tasks={tasks}
        status="todo"
        handleDelete={handleDelete}/>
        <TaskColumn 
        title="Doing" 
        icon={doingIcon}
        tasks={tasks}
        status="doing"
        handleDelete={handleDelete}/>
        <TaskColumn 
        title="Done" 
        icon={doneIcon}
        tasks={tasks}
        status="done"
        handleDelete={handleDelete}/>
      </main>
    </div>
  )
}
export default App;
