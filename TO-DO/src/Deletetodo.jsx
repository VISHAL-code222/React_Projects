import React, { useState } from 'react'
import "../src/Deletetodo.css"

function Deletetodo({list,result}) {

  





  return (
    <div>
      <div className="container2">
      <ul style={{listStyleType:"none"}}>
        {list.map((todos)=>{
          return (
          <li key={todos.id}>
            {todos.text}
            <button  id="btn"  onClick={()=>{result(todos.id)}}>DELETE</button>
          </li>
          )
        })}
      </ul>
      </div>
    </div>
  )
}

export default Deletetodo
