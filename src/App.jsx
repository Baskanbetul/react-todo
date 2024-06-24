import React from "react";

const todoList = [
  { title: "Go shopping", id: "1" },
  { title: "Finish cleaning", id: "2" },
  { title: "Go to gym", id: "3" },
];

function App() {
  return (
    <div>
      <h1>Todo List</h1>

      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />

      <hr />

      <ul>
        {todoList.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>{item.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
