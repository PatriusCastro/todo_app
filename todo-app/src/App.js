import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
        
    
      <div className="todo_wrapper">
        
        <h1>My Todos</h1>

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

        <div className="list_container">
          <div className="btn_area">
            <button className="todo_btn">To Do</button>
            <button className="comp_btn">Completed</button>
          </div>

          <div className="todo_list">
            <div className="todo-list-item">
              <h3>Task 1</h3>
              <p>Description</p>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
