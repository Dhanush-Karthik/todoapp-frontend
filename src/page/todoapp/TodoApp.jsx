import React from 'react'
import AddTodo from '../../component/addtodo/AddTodo'
import TodoTable from '../../component/todotable/TodoTable'

const TodoApp = () => {
  return (
    <div className='todoApp'>
      <TodoTable />
      <AddTodo />
    </div>
  )
}

export default TodoApp
