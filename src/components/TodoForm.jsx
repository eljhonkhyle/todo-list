import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === '') {
      setError('Please enter a task before adding.');
      return;
    }

    addTodo(value);

    setValue('');
    setError('');
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
        {error && <p className="error-message">{error}</p>}
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
      
    </div>
  );
};

export default TodoForm;
