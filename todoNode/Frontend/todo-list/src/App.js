import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [todos, setTodos] = useState([])
  const [userInput, setUserInput] = useState("");

  const getTodos = async () => {
    const { data } = await axios.get("http://localhost:3001/todos");
    setTodos(data);
  }

  function addTodos() {
    const newTodo = {
    id: Math.floor(Math.random() * 10000),
    chore: userInput,
    done: false,
    };
    
    const options = {
    method: "POST",
    url: "http://localhost:3001/todos",
    headers: { "Content-Type": "application/json" },
    data: newTodo,
    };
    
    axios
    .request(options)
    .then(function (response) {
    console.log(response.data);
    getTodos();
    })
    .catch(function (error) {
    console.error(error);
    
    });
    
    }

    function deleteTodo(id) {
      const url = `http://localhost:3001/todos/${id}`;
axios
.delete(url)
.then(function (response) {
console.log(response);
getTodos();
})
.catch(function (error) {
console.error(error);
});
};

const checkedTodo = (todo) => {
  const url = `http://localhost:3001/todos/${todo.id}`;
axios
.patch(url, { completed: !todo.completed })
.then(function (response) {
console.log(response.data);
getTodos();
})
.catch(function (error) {
console.error(error);
});
};

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
    console.log(e);
    };
    
    const handleSubmit = (e) => {
    e.preventDefault();
    
    addTodos(userInput);
    
    setUserInput("");
    
    };


  useEffect(() => {
    getTodos();
  }, [])

  return (
    <div className="App">
      <header className="App-header">
      {todos.map((todo) => (
          <div>
            <p key={todo.id}>{todo.chore}
          <button onClick={() => {
            checkedTodo(todo)
          }} className='complete-btn'><i className='fas fa-check'></i></button>
          <button onClick={() => {
            deleteTodo(todo.id);
          }} className='trash-btn'><i className='fas fa-trash'></i></button>
          </p>
          </div>
  ))}
  <form onSubmit={handleSubmit}>
<input
value={userInput}
type="text"
placeholder="Enter task..."
onChange={handleChange}
/>
<button type="button" onClick={addTodos}>
Add todos
</button>
</form>
      </header>
    </div>
  );
}

export default App;
