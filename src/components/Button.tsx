import "./Button.css";
import React from 'react';
import "../Props"

const Button : React.FC<Props> = ({ className, value, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {value}
    </button>
  );
};

export default Button;