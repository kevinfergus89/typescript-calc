import "./Wrapper.css";
import React from 'react';
import "../Props"

  
const Wrapper: React.FC<Props> = ({children }) => {
  return <div className="wrapper">{children}</div>;
};

export default Wrapper;
