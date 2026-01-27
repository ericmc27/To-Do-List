import { useState } from 'react'
import TodoItem from './components/TodoItem'

const App = ()=> {
  const [currentTask, setCurrentTask] = useState('')
  const [todos, setTodos] = useState([])

  const handleNewTodo = (event)=>{
    if(event.key === "Enter" && currentTask !== ''){
      setTodos([...todos, {content: currentTask, completed: false}])
      setCurrentTask('')
    }
  }

  return (
    <>
    <input value={currentTask} onChange={(e)=>(setCurrentTask(e.target.value))} placeholder='Add a todo' onKeyUp={handleNewTodo}></input>
    <ul>
      {
        todos.map((todo, idx)=>(
          <TodoItem key={idx} content={todo.content}/>
        ))
      }
    </ul>
    </>
  )
}

export default App