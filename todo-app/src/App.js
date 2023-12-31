import React,{useEffect, useState} from 'react';
import { IoRemoveCircle } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";
import './App.css';

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [AllTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDesc, setNewDesc] = useState("");

  const handleAddTodo = ()=>{
    let newTodoItem = {
      title:newTitle,
      description:newDesc
    };

    let updatedTodoArr = [...AllTodos];
    updatedTodoArr.push(newTodoItem);
    setTodos(updatedTodoArr);
    localStorage.setItem('todolist', JSON.stringify(updatedTodoArr))
  };

  const handleDeleteTodo = (index)=>{
    let reducedTodo = [...AllTodos];
    reducedTodo.splice(index, 1);
    
    localStorage.setItem('todolist', JSON.stringify(reducedTodo));
    setTodos(reducedTodo);
  }

  useEffect(()=>{
    let savedTodoList = JSON.parse(localStorage.getItem('todolist'));
    if(savedTodoList){
      setTodos(savedTodoList);
    }
  },[])

  return (
    <div className="App">
        
      <div className="todo_wrapper">
        
        <h1>My Todos</h1>

        <div className="todo_input">

          <div className="todo_input_item">
            <label>Title</label>
            <input type="text" value={newTitle} onChange={(e)=> setNewTitle(e.target.value)} placeholder="Enter your task title"></input>
          </div>

          <div className="todo_input_item">
            <label>Description</label>
            <input type="text" value={newDesc} onChange={(e)=> setNewDesc(e.target.value)} placeholder="Enter your task description"></input>
          </div>

          <div className="todo_input_item">
            <button type='button' onClick={handleAddTodo} className="primaryBtn">Add</button>
          </div>

        </div> 

        <div className="list_container">
          <div className="btn_area">
            <button className={`todo_comp_btn isCompleteScreen ${isCompleteScreen===false && 'active'}`} onClick={()=>setIsCompleteScreen(false)}>To Do</button>
            <button className={`todo_comp_btn isCompleteScreen ${isCompleteScreen===true && 'active'}`} onClick={()=>setIsCompleteScreen(true)}>Completed</button>
          </div>

          <div className="todo_list">
            {AllTodos.map((item, index)=>{
              return(
                <div className="todo_list_item" key={index}>
                  <div className="todo_list_desc">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  
                  <div className="todo_list_btn">
                    <IoRemoveCircle className="icon" onClick={()=>handleDeleteTodo(index)} title="Delete?" />
                    <IoCheckmarkCircle className="checkicon" title="Complete?" />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
