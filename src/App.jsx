import { twMerge } from "tailwind-merge";
import { useState } from "react";

function CalculaterBtn({ children, className, ...rest }) {
  return (
    <button
      className={twMerge(
        `bg-gray-300 py-5 aspect-square rounded-2xl shadow-sm text-black
        hover:brightness-95 hover:cursor-pointer active:brightness-75 transition-all duration-100 text-3xl`,
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}

function Calculater() {
  const [curValue, setValue] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [operation, setOperation] = useState(null);

  function handleDecimalClick(i) {
    setValue((prev) => prev + i);
  }

  function handleClear() {
    setValue("");
    setPrevValue("");
    setOperation(null);
  }

  function setPercent() {
    setValue((prev) => (parseFloat(prev) / 100).toString());
  }

  function setSqrt() {
    setValue((prev) => Math.sqrt(parseFloat(prev)).toString());
  }

  function handleSetOp(op) {
    setOperation(op);
    setPrevValue(curValue);
    setValue("");
  }

  function handleEqual() {
    const prev = parseFloat(prevValue);
    const current = parseFloat(curValue);

    if (isNaN(prev) || isNaN(current)) return;

    let result;

    switch (operation) {
      case "+":
        result = prev + current;
        break;
      case "-":
        result = prev - current;
        break;
      case "*":
        result = prev * current;
        break;
      case "÷":
        result = prev / current;
        break;
      default:
        return;
    }

    setValue(result.toString());
    setPrevValue("");
    setOperation(null);
  }

  return (
    <div className="bg-pink-100 p-3 rounded-2xl w-[320px]">
      <div className="bg-gray-300 shadow-sm text-right text-5xl mb-5 rounded-2xl p-4">
        {curValue}
      </div>

      <div className="grid grid-cols-4 gap-5">
        <CalculaterBtn className="bg-yellow-200 text-black" onClick={handleClear}>
          C
        </CalculaterBtn>
        <CalculaterBtn onClick={setPercent}>%</CalculaterBtn>
        <CalculaterBtn onClick={setSqrt}>√</CalculaterBtn>
        <CalculaterBtn
          className="bg-orange-400 text-black"
          onClick={() => handleSetOp("÷")}
        >
          ÷
        </CalculaterBtn>

        <CalculaterBtn onClick={() => handleDecimalClick("7")}>7</CalculaterBtn>
        <CalculaterBtn onClick={() => handleDecimalClick("8")}>8</CalculaterBtn>
        <CalculaterBtn onClick={() => handleDecimalClick("9")}>9</CalculaterBtn>
        <CalculaterBtn
          className="bg-orange-400 text-black"
          onClick={() => handleSetOp("*")}
        >
          *
        </CalculaterBtn>

        <CalculaterBtn onClick={() => handleDecimalClick("4")}>4</CalculaterBtn>
        <CalculaterBtn onClick={() => handleDecimalClick("5")}>5</CalculaterBtn>
        <CalculaterBtn onClick={() => handleDecimalClick("6")}>6</CalculaterBtn>
        <CalculaterBtn
          className="bg-orange-400 text-black"
          onClick={() => handleSetOp("-")}
        >
          -
        </CalculaterBtn>

        <CalculaterBtn onClick={() => handleDecimalClick("1")}>1</CalculaterBtn>
        <CalculaterBtn onClick={() => handleDecimalClick("2")}>2</CalculaterBtn>
        <CalculaterBtn onClick={() => handleDecimalClick("3")}>3</CalculaterBtn>
        <CalculaterBtn
          className="bg-orange-400 text-black"
          onClick={() => handleSetOp("+")}
        >
          +
        </CalculaterBtn>

        <CalculaterBtn
          className="col-span-2 aspect-auto"
          onClick={() => handleDecimalClick("0")}
        >
          0
        </CalculaterBtn>
        <CalculaterBtn onClick={() => handleDecimalClick(".")}>.</CalculaterBtn>
        <CalculaterBtn className="bg-slate-600 text-white" onClick={handleEqual}>
          =
        </CalculaterBtn>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="bg-gray-800 min-h-screen flex items-center justify-center">
      <Calculater />
    </div>
  );
}

export default App;