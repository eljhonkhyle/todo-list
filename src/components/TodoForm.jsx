import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    e.preventDefault();

    addTodo(value)

    setValue("")
  }
  return (
    <div>
        <form  className='todo-form' onSubmit={handleSubmit}>
        <input value={value} onChange={e => setValue(e.target.value)} id='item' type="text" className='todo-input' placeholder='e.g. Doing Homework'/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
    </div>
  )
}

export default TodoForm