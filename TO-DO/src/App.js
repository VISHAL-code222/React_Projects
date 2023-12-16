import React, { useState } from 'react'
import Addtodo from './Addtodo';
import Deletetodo from './Deletetodo';
import "../src/App.css"

function App() {

  let[todo,setTodo]=useState([]);
  let[singletodo,setSingleTodo]=useState("");
  

  let AddTodo=()=>{
    
     if(singletodo!==""){
       setTodo([...todo,{id:Date.now(),text:singletodo}]);
       
       setSingleTodo(" ");
     }
  }
  let DeleteTodo=(id)=>{
    
    setTodo(todo.filter((item)=>{return item.id!==id}))
  }





  return (
    <div className='App'>
      <h1 style={{textAlign:"center"}}>TO-DO LIST</h1>
      <div className="container">
      <Addtodo  singletodo={singletodo} setSingleTodo={setSingleTodo}  AddTodo={AddTodo}     />
      <Deletetodo   list={todo}  result={DeleteTodo}    />
      </div>
    </div>
  )
}

export default App










