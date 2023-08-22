import React, { useState } from 'react'
import AddButton from '../addButton/AddButton'

import TodoForm from '../todoForm/TodoForm'

const AddTodo = () => {
const [openForm,setOpenForm] = useState(true);

  return (
    <div className='todoForm'>
      <TodoForm openForm={openForm} setOpenForm={setOpenForm}/>
      <AddButton openForm={openForm} setOpenForm={setOpenForm}/>
    </div>
  )
}

export default AddTodo
