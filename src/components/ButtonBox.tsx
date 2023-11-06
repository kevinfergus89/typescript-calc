import "./ButtonBox.css";
import React from 'react';
import "../Props"

const ButtonBox : React.FC<Props> = ({ children }) => {
  return <div className="buttonBox">{children}</div>;
};

export default ButtonBox;