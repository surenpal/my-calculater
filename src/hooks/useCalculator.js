import { useState } from "react";

export default function useCalculator() {

  const [curValue, setValue] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [operation, setOperation] = useState(null);

  function appendNumber(num) {
    setValue((prev) => {
      if (num === "." && prev.includes(".")) return prev;
      return prev + num;
    });
  }

  function clear() {
    setValue("");
    setPrevValue("");
    setOperation(null);
  }

  function setOp(op) {
    if (curValue === "") return;

    setPrevValue(curValue);
    setOperation(op);
    setValue("");
  }

  function calculate() {

    const prev = parseFloat(prevValue);
    const cur = parseFloat(curValue);

    if (isNaN(prev) || isNaN(cur)) return;

    let result;

    switch (operation) {
      case "+":
        result = prev + cur;
        break;

      case "-":
        result = prev - cur;
        break;

      case "*":
        result = prev * cur;
        break;

      case "÷":
        if (cur === 0) {
          setValue("Error");
          return;
        }
        result = prev / cur;
        break;

      default:
        return;
    }

    setValue(result.toString());
    setPrevValue("");
    setOperation(null);
  }

  return {
    curValue,
    prevValue,
    operation,
    appendNumber,
    setOp,
    calculate,
    clear
  };
}