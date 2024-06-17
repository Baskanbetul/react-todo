import React from "react";

const todoList = [
  { title: "Go shopping", id: "1" },
  { title: "Finish cleaning", id: "2" },
  { title: "Go to gym", id: "3" },
];

function App() {
  const todoListItems = todoList.map(function (item) {
    return <li>{item.title}</li>;
  });
  return (
    <div>
      <h1>Todo List</h1>

      <ul>{todoListItems}</ul>
    </div>
  );
}

export default App;
