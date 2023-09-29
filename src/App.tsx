import { useEffect, useState } from 'react'
import'./App.css'

const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1'

function App() {
  const [todo, setTodo] = useState([])

  console.log(todo)

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((object) => setTodo(object))
      .catch((error) => console.log('You got error!', error))
  }, [])

return (
  <div>
     <p>Title: {todo.title}</p>
          <p>User ID: {todo.userId}</p>
          <p>ID: {todo.id}</p>
          <p>Completed: {todo.completed ? 'True' : 'False'}</p>

         
        </div>
  );
}
export default App


