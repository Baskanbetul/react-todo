// import React, { useRef, useEffect } from "react";

// function InputWithLabel(props) {
//   return (
//     <>
//       <label htmlFor="title" style={{ margin: "5px" }}>
//         {props.children}
//       </label>
//       <input
//         name="title"
//         placeholder="todo"
//         id="todoTitle"
//         type="text"
//         value={props.todoTitle}
//         onChange={props.handleTitleChange}
//         autoFocus=""
//       ></input>
//     </>
//   );
// }

// export default InputWithLabel;

import React, { useRef, useEffect } from "react";

function InputWithLabel({ id, value, onInputChange, placeholder, children }) {
  const inputRef = useRef();

  useEffect(() => {
    // Example of using the ref to focus the input when the component mounts
    inputRef.current.focus();
  });

  return (
    <div>
      <label htmlFor={id}>{children}</label>
      <input
        ref={inputRef} // Attach the ref to the input element
        id={id}
        value={value}
        onChange={onInputChange}
        placeholder={placeholder}
        type="text"
      />
    </div>
  );
}

export default InputWithLabel;
