import React, { useState } from 'react';
import '../style/TaskInput.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';


function TaskInput({ addTask }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === '') return;
    addTask(input.trim());
    setInput('');
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a task"
      />
      <button type="submit">
  <FontAwesomeIcon icon={faPlus} />
</button>

    </form>
  );
}

export default TaskInput;
