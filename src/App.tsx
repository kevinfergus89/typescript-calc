import logo from './logo.svg';
import React, { useState } from "react";
import './App.css';
import Wrapper from "./components/Wrapper";
import Screen from "./components/Screen";
import ButtonBox from "./components/ButtonBox";
import Button from "./components/Button";

const btnValues = [
  ["C", "+-", "%", "/"],
  ["7", "8", "9", "X"],
  ["4", "5", "6", "-"],
  ["1", "2", "3", "+"],
  ["0", ".", "="],
];



const App = () => {
  let [calc, setCalc] = useState({
    sign: "",
    num: 0,
    res: 0,
  });

  const numClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const value = (e.target as Element).innerHTML;

    if (calc.num.toString().length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === 0 && value === "0"
            ? 0
            : calc.num % 1 === 0
            ? calc.num + Number(value)
            : calc.num + Number(value),
        res: !calc.sign ? 0 : calc.res,
      });
    }
}
  return (
    <Wrapper>
      <Screen value={calc.num ? calc.num.toString() : calc.res.toString()} />
      <ButtonBox>
      {
          btnValues.flat().map((btn, i) => {
            return (
              <Button
                key={i}
                className={btn === "=" ? "equals" : ""}
                value={btn}
                onClick={() => {
                  console.log(`${btn} clicked!`);
                }}
              />
            );
          })
        }
      </ButtonBox>
    </Wrapper>
  );
};

export default App;