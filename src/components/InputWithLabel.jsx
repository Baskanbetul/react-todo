import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";

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

InputWithLabel.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  children: PropTypes.node,
};

export default InputWithLabel;
