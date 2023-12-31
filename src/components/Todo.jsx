import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const [selected, setSelected] = useState(task.completed);

  const handleCheckboxChange = () => {
    setSelected(!selected);
    toggleComplete(task.id);
  };

  const handleDeleteClick = (event) => {
    event.stopPropagation(); // Prevent the checkbox's click event from firing
    if (selected) {
      deleteTodo(task.id);
    }
  };

  return (
    <div className={`todo ${selected ? 'selected' : ''}`}>
      <input
        type="checkbox"
        checked={selected}
        onChange={handleCheckboxChange}
        className={`${task.completed ? 'completed' : ''}`}
      />
      <p className={`${task.completed ? 'completed' : 'incompleted'}`}>
        {task.task}
      </p>
      <div>
        <FontAwesomeIcon className='edit-icon' onClick={() => editTodo(task.id)} icon={faPenToSquare} />
        <FontAwesomeIcon className='delete-icon' onClick={() => deleteTodo(task.id)} icon={faTrash} />
      </div>
    </div>
  );
};

export default Todo;
