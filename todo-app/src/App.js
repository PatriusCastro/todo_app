import React,{useEffect, useState} from 'react';
import { IoRemoveCircle } from "react-icons/io5";
import { IoCheckmarkCircle } from "react-icons/io5";
import { RiEditCircleFill } from "react-icons/ri";
import './App.css';

function App() {
  const [isCompleteScreen, setIsCompleteScreen] = useState(false);
  const [AllTodos, setTodos] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newDesc, setNewDesc] = useState('');
  const [completedTodos, setCompletedTodos] = useState([]);

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
  };

  const handleComplete = (index)=>{
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    let completedOn = dd + '-' + mm + '-' + yyyy + ' at ' + h + ':' + m + ':' + s;

    let filteredItem = {
      ...AllTodos[index],
      completedOn:completedOn
    }

    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem ('completedTodos', JSON.stringify(updatedCompletedArr))
  };

  const handleDeleteCompletedTodo = (index)=>{
    let reducedTodo = [...completedTodos];
    reducedTodo.splice(index, 1);
    
    localStorage.setItem('completed', JSON.stringify(reducedTodo));
    setCompletedTodos(reducedTodo);
  }

  useEffect(()=>{
    let savedTodoList = JSON.parse(localStorage.getItem('todolist'));
    let savedCompletedList = JSON.parse(localStorage.getItem('completedTodos'));
    if(savedTodoList){
      setTodos(savedTodoList);
    }

    if(savedCompletedList){
      setCompletedTodos(savedCompletedList);
    }
  },[]);

  return (
    <div className="App">
        
      <div className="todo_wrapper">
        
        <h1>This is your To<span>Dos</span></h1>

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
            {isCompleteScreen===false && AllTodos.map((item, index)=>{
              return(
                <div className="todo_list_item" key={index}>
                  <div className="todo_list_desc">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  
                  <div className="todo_list_btn">
                    <RiEditCircleFill  className="editicon" title="Edit?" />
                    <IoRemoveCircle className="icon" onClick={()=>handleDeleteTodo(index)} title="Delete?" />
                    <IoCheckmarkCircle className="checkicon" onClick={()=>handleComplete(index)} title="Complete?" />
                  </div>
                </div>
              );
            })}

            {isCompleteScreen===true && completedTodos.map((item, index)=>{
              return(
                <div className="todo_list_item" key={index}>
                  <div className="todo_list_desc">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <p><small>Completed on: {item.completedOn}</small></p>
                  </div>
                  
                  <div className="todo_list_btn">
                    <IoRemoveCircle className="icon" onClick={()=>handleDeleteCompletedTodo(index)} title="Delete?" />
                  </div>
                </div>
              );
            })}

          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
