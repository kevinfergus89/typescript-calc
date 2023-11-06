import "./Screen.css";
import React from 'react';
import "../Props"

const Screen : React.FC<Props> = ({ value }) => {
  return (
    <div className="screen">
      {value}
    </div>
  );
};

export default Screen;