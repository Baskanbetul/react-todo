import React, { useState } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import TodoListItem from "./TodoListItem";
import "./App.css";

// const todoList = [
//   { title: "Go shopping", id: "1" },
//   { title: "Finish cleaning", id: "2" },
//   { title: "Go to gym", id: "3" },
// ];

// function TodoList() {
//   return (
//     <ul>
//       {todoList.map(function (item) {
//         return (
//           <li key={item.objectID}>
//             <span>{item.title}</span>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }

// function Search() {
//   return (
//     <div>
//       <label htmlFor="search">Search: </label>
//       <input id="search" type="text" />
//     </div>
//   );
// }

function App() {
  // const [newTodo, setNewTodo] = useState(); //state variable
  const [todoList, setTodoList] = useState([]);
  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }
  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      {/* <p> {newTodo} </p> */}
      <hr />
      <TodoList todoList={todoList} />
      <TodoListItem />
    </div>
  );
}

export default App;
