import React, { useState, useEffect } from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import TodoListItem from "./components/TodoListItem";
import "./App.css";
import { jsx } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";

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

      setTodoList(data); // Set the sorted data to the state
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
    window.localStorage.setItem("savedTodoList", JSON.stringify(todoList));
  }, [todoList]); //Define a useEffect React ve todoListi oraya yazdik o dependency oluyor
  todoList.sort((objectA, objectB) => {
    if (objectA.title < objectB.title) return -1; // Title A is less than Title B
    if (objectA.title > objectB.title) return 1; // Title A is greater than Title B
    return 0; // Titles are the same
  });

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
        <Route path="/" element={<Home />} />
        <Route
          path="/todolist"
          element={
            <>
              <h1>Todo List</h1>
              <AddTodoForm onAddTodo={addTodo} />
              <hr />
              <TodoList todoList={todoList} onRemoveTodo={removeTodo} />
            </>
          }
        />

        <Route
          path="/new"
          element={
            <>
              <h1>New Todo List</h1>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
