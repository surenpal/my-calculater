import { useEffect, useRef } from "react";
import Display from "./Display";
import CalculatorButton from "./CalculatorButton";
import useCalculator from "../hooks/useCalculator";

export default function Calculator() {

  const {
    curValue,
    prevValue,
    operation,
    appendNumber,
    setOp,
    calculate,
    clear,
    backspace,
    percentage,
  } = useCalculator();

  // Keep ref current after every render without re-registering the listener
  const actions = useRef({});
  useEffect(() => {
    actions.current = { appendNumber, setOp, calculate, clear, backspace, percentage };
  });

  useEffect(() => {
    function handleKey(e) {
      const { appendNumber, setOp, calculate, clear, backspace, percentage } = actions.current;
      if (e.key >= "0" && e.key <= "9") appendNumber(e.key);
      else if (e.key === ".")           appendNumber(".");
      else if (e.key === "+")           setOp("+");
      else if (e.key === "-")           setOp("-");
      else if (e.key === "*")           setOp("*");
      else if (e.key === "/")         { e.preventDefault(); setOp("÷"); }
      else if (e.key === "Enter" || e.key === "=") calculate();
      else if (e.key === "Escape")      clear();
      else if (e.key === "Backspace")   backspace();
      else if (e.key === "%")           percentage();
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="
      w-full max-w-xs
      bg-white/10 backdrop-blur-xl
      rounded-3xl shadow-2xl
      p-5 border border-white/20
    ">
      <Display prevValue={prevValue} curValue={curValue} operation={operation} />

      <div className="grid grid-cols-4 gap-2.5">

        {/* Row 1 */}
        <CalculatorButton variant="clear" onClick={clear}>C</CalculatorButton>
        <CalculatorButton variant="action" onClick={backspace}>⌫</CalculatorButton>
        <CalculatorButton variant="action" onClick={percentage}>%</CalculatorButton>
        <CalculatorButton variant="operator" onClick={() => setOp("÷")}>÷</CalculatorButton>

        {/* Row 2 */}
        <CalculatorButton onClick={() => appendNumber("7")}>7</CalculatorButton>
        <CalculatorButton onClick={() => appendNumber("8")}>8</CalculatorButton>
        <CalculatorButton onClick={() => appendNumber("9")}>9</CalculatorButton>
        <CalculatorButton variant="operator" onClick={() => setOp("*")}>×</CalculatorButton>

        {/* Row 3 */}
        <CalculatorButton onClick={() => appendNumber("4")}>4</CalculatorButton>
        <CalculatorButton onClick={() => appendNumber("5")}>5</CalculatorButton>
        <CalculatorButton onClick={() => appendNumber("6")}>6</CalculatorButton>
        <CalculatorButton variant="operator" onClick={() => setOp("-")}>−</CalculatorButton>

        {/* Row 4 */}
        <CalculatorButton onClick={() => appendNumber("1")}>1</CalculatorButton>
        <CalculatorButton onClick={() => appendNumber("2")}>2</CalculatorButton>
        <CalculatorButton onClick={() => appendNumber("3")}>3</CalculatorButton>
        <CalculatorButton variant="operator" onClick={() => setOp("+")}>+</CalculatorButton>

        {/* Row 5 */}
        <CalculatorButton className="col-span-2" onClick={() => appendNumber("0")}>0</CalculatorButton>
        <CalculatorButton onClick={() => appendNumber(".")}>.</CalculatorButton>
        <CalculatorButton variant="equals" onClick={calculate}>=</CalculatorButton>

      </div>
    </div>
  );
}
