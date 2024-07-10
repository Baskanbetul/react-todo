import React from "react";
import TodoListItem from "./TodoListItem";

const todoList = [
  { title: "Go shopping", id: "1" },
  { title: "Finish cleaning", id: "2" },
  { title: "Go to gym", id: "3" },
];

function TodoList() {
  return (
    <ul>
      {todoList.map(function (item) {
        return <TodoListItem title={item.title} key={item.id} />;
        /* <li key={item.objectID}>
            <span>{item.title}</span>
          </li> */
      })}
    </ul>
  );
}

export default TodoList;
