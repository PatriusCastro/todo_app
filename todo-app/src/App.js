import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>

      <div className="todo_wrapper">
        <div className="todo_input">
          <div className="todo_input_item">
            <label>Title</label>
            <input type="text" placeholder="Enter your task title"></input>
          </div>
          <div className="todo_input_item">
            <label>Description</label>
            <input type="text" placeholder="Enter your task description"></input>
          </div>
          <div className="todo_input_item">
            <button type='button' className="primaryBtn">Add</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
