import React, { useState } from 'react'

const EditTodo = ({editTodo, task}) => {
  const [value, setValue] = useState(task.task)

  const handleSubmit = e => {
    e.preventDefault();

    editTodo(value, task.id)

    setValue("")
  }
  return (
    <div>
      <span>
        
      </span>
        <form  className='todo-form' onSubmit={handleSubmit}>
        <input value={value} onChange={e => setValue(e.target.value)} id='item' type="text" placeholder='Update Task' className='todo-input'/>
        <button type='submit' className='update-btn'>Update</button>
    </form>
    </div>
  )
}

export default EditTodo