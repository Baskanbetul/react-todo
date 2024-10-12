import React, { useState, useEffect } from "react";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import TodoListItem from "./TodoListItem";
import "./App.css";
import { jsx } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";

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
