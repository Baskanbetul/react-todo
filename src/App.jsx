import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import TodoListItem from "./TodoListItem";
import "./App.css";
import { jsx } from "react/jsx-runtime";
// import { useEffect } from "react";

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
function getTodoListDefaultState() {
  const savedTodoListString = window.localStorage.getItem("savedTodoList");
  if (savedTodoListString) {
    return JSON.parse(savedTodoListString);
  } else {
    return [];
  }
}

function App() {
  const [todoList, setTodoList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ data: { todoList: getTodoListDefaultState() } });
      }, 2000);
    }).then((result) => {
      console.log(result);
      setLoading(false);
      setTodoList(result.data.todoList);
    });
  }, []);
  useEffect(() => {
    console.log("todoList has changed");
    console.log(todoList);
    if (loading) {
      return;
    } else {
      window.localStorage.setItem("savedTodoList", JSON.stringify(todoList));
    }
  }, [todoList]); //Define a useEffect React ve todoListi oraya yazdik o dependency oluyor

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
    console.log(id);
  };

  return (
    <>
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <hr />
      {loading ? (
        <span class="loader"></span>
      ) : (
        <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
      )}
      {/* {loading && <span class="loader"></span>}
      {!loading && <TodoList todoList={todoList} onRemoveTodo={removeTodo} />} */}
    </>
  );
}

export default App;
