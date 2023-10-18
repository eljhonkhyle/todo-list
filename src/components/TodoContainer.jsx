import React, { useState, useEffect } from 'react';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo';
import EditTodo from './EditTodo';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    
    // Load todos from local storage when the component mounts
    const storedTodos = localStorage.getItem('todos');
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);

  const addTodo = (todo) => {
    const newTodo = {
      id: uuidv4(),
      task: todo,
      completed: false,
      isEditing: false,
    };
    const updatedTodos = [...todos, newTodo];
    setTodos(updatedTodos);

    // Save todos to local storage whenever todos are updated
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);

    // Save updated todos to local storage
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const deleteTodo = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    // Save updated todos to local storage
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const editTodo = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
    );
    setTodos(updatedTodos);

    // Save updated todos to local storage
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  const editTask = (task, id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
    );
    setTodos(updatedTodos);

    // Save updated todos to local storage
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div className="todo-wrapper">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) =>
        todo.isEditing ? (
          <EditTodo editTodo={editTask} task={todo} key={todo.id} />
        ) : (
          <Todo
            task={todo}
            key={todo.id}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        )
      )}
    </div>
  );
};

export default TodoContainer;