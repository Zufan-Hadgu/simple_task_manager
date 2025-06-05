import React from 'react';
import '../style/TaskItem.css';  

function TaskItem({ task, onDelete, onToggle }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <span onClick={() => onToggle(task.id)}>
        {task.title}
      </span>
      <button onClick={() => onDelete(task.id)}>Cancle</button>
    </li>
  );
}

export default TaskItem;
