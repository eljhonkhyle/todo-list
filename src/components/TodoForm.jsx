import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === '') {
      setErrorMessage('Please enter a task before adding.');
      return;
    }

    addTodo(value);

    setValue('');
    setErrorMessage('');
  };

  return (
    <div>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          id="item"
          type="text"
          className="todo-input"
          placeholder="e.g. Go to work"
        />
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
      
    </div>
  );
};

export default TodoForm;
