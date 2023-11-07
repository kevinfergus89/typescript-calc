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
    num: "0",
    res: "0",
  });

  const numClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const value = (e.target as Element).innerHTML;

    if (calc.num.toString().length < 16) {
      setCalc({
        ...calc,
        num:
          calc.num === "0" && value === "0"
            ? "0"
            : Number(calc.num) % 1 === 0
            ? calc.num + Number(value)
            : Number(calc.num)+ Number(value).toString(),
        res: !calc.sign ? "0" : calc.res,
      });
    }
}; 

const invertClickHandler: React.MouseEventHandler<HTMLButtonElement> = () => {
  setCalc({
    ...calc,
    num: calc.num ? (Number(calc.num) * -1).toString() : "0",
    res: calc.res ? (Number(calc.res) * -1).toString() : "0",
    sign: "",
  });
};
const signClickHandler: React.MouseEventHandler<HTMLButtonElement>  = (e) => {
  e.preventDefault();
  const value = (e.target as Element).innerHTML;

  setCalc({
    ...calc,
    sign: value,
    res: !calc.res && calc.num ? calc.num : calc.res,
    num: "0",
  });
};

const equalsClickHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
  if (calc.sign && calc.num) {
    const math = (a: number, b: number, sign: string) =>
      sign === "+"
        ? a + b
        : sign === "-"
        ? a - b
        : sign === "X"
        ? a * b
        : a / b;

    setCalc({
      ...calc,
      res:
        calc.num === "0" && calc.sign === "/"
          ? "Can't divide with 0"
          : math(Number(calc.res), Number(calc.num), calc.sign).toString(),
      sign: "",
      num: "0",
    });
  }
};
const commaClickHandler:  React.MouseEventHandler<HTMLButtonElement> = (e) => {
  e.preventDefault();
  const value = (e.target as Element).innerHTML;

  setCalc({
    ...calc,
    num: !calc.num.toString().includes(".") ? calc.num + value : calc.num,
  });
};

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
                onClick={
                  btn === "C"
                    ? resetClickHandler
                    : btn === "+-"
                    ? invertClickHandler
                    : btn === "%"
                    ? percentClickHandler
                    : btn === "="
                    ? equalsClickHandler
                    : btn === "/" || btn === "X" || btn === "-" || btn === "+"
                    ? signClickHandler
                    : btn === "."
                    ? commaClickHandler
                    : numClickHandler
                }
              />
            );
          })
        }
      </ButtonBox>
    </Wrapper>
  );
};

export default App;