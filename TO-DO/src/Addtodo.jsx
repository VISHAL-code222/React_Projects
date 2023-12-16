import React from 'react'
import "../src/Addtodo.css"

function Addtodo({singletodo,setSingleTodo,AddTodo}) {
  return (
    <div className='Add'>


      <div className="container1">
      <input  id="input"  type="text" placeholder='enter a todo' value={singletodo} onChange={(e)=>{setSingleTodo(e.target.value)}}  />
      <button id='btn' onClick={AddTodo}>ADD</button>
      </div>
    </div>
  )
}

export default Addtodo
