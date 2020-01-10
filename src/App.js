import React, { useState } from 'react';
import "./App.css";
import Header from './components/Header';
import AddToDo from './components/AddToDo';


const App = () => {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);


  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addNewToDo = (e) => {
    e.preventDefault();
    setTodos([...todos, { id: Math.random(), task: task }]);
    setTask("");
  };

  const removeToDo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  return (
    <div>

      <div className="ToDoContainer">
        <Header />
        <form onSubmit={addNewToDo}>

          <AddToDo task={task} handleChange={handleChange} addNewToDo={addNewToDo} />
          <ul className="newToDo">
            {todos.map((todo) =>
              <li className="newList" key={todo.id}>
                {todo.task}
                <a href="#" onClick={() => removeToDo(todo.id)}>X</a>
              </li>
            )}
          </ul>

        </form>
      </div>
    </div>
  );
};

export default App;