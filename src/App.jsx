import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import TodoListItem from "./TodoListItem";
import "./App.css";
import { jsx } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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

function useSemiPersistentState() {
  const [todoList, setTodoList] = useState(getTodoListDefaultState());

  async function fetchData() {
    try {
      const response = await fetch("https://api.example.com/todos");
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.status}`);
      }
      const data = await response.json();
      setTodoList(data);
    } catch (error) {
      console.error("Error fetching data:", error.message); // Log the error's message
    } finally {
      setIsLoading(false); // Set loading to false after fetch is complete
    }
  }

  useEffect(() => {
    fetchData(); // Call fetchData inside useEffect
  }, []); // Empty dependency array to run only once

  useEffect(() => {
    console.log("todoList has changed");
    console.log(todoList);
    window.localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]); //Define a useEffect React ve todoListi oraya yazdik o dependency oluyor

  return [todoList, setTodoList];
}
function App() {
  const [todoList, setTodoList] = useSemiPersistentState();

  function addTodo(newTodo) {
    setTodoList([...todoList, newTodo]);
  }

  const removeTodo = (id) => {
    const updatedTodoList = todoList.filter((todo) => todo.id !== id);
    setTodoList(updatedTodoList);
    console.log(id);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              <hr />
              <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
