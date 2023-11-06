import "./Wrapper.css";
import React from 'react';
import "../Props"

const btnValues = [
    ["C", "+-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "="],
  ];
  
const Wrapper: React.FC<Props> = ({children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
