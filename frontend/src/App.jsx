import React, { useState } from 'react';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Read a book', completed: true },
  ]);

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="app">
      <h1>Simple Task Manager</h1>

      <TaskInput addTask={(title) => {
        const newItem = {
          id: Date.now(),
          title: title,
          completed: false,
        };
        setTasks([...tasks, newItem]);
      }} />

      <ul className="task-list">
        {tasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
