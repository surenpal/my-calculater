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
    clear
  } = useCalculator();

  return (
    <div
      className="
      w-full
      max-w-sm
      bg-white/10
      backdrop-blur-lg
      rounded-3xl
      shadow-2xl
      p-6
      border
      border-white/20
      "
    >

      <Display
        prevValue={prevValue}
        curValue={curValue}
        operation={operation}
      />

      <div className="grid grid-cols-4 gap-3">

        <CalculatorButton
          className="bg-yellow-300"
          onClick={clear}
        >
          C
        </CalculatorButton>

        <CalculatorButton
          className="bg-orange-400 text-white"
          onClick={() => setOp("÷")}
        >
          ÷
        </CalculatorButton>

        <CalculatorButton
          className="bg-orange-400 text-white"
          onClick={() => setOp("*")}
        >
          *
        </CalculatorButton>

        <CalculatorButton
          className="bg-orange-400 text-white"
          onClick={() => setOp("-")}
        >
          -
        </CalculatorButton>

        <CalculatorButton onClick={() => appendNumber("7")}>7</CalculatorButton>
        <CalculatorButton onClick={() => appendNumber("8")}>8</CalculatorButton>
        <CalculatorButton onClick={() => appendNumber("9")}>9</CalculatorButton>

        <CalculatorButton
          className="bg-orange-400 text-white"
          onClick={() => setOp("+")}
        >
          +
        </CalculatorButton>

        <CalculatorButton onClick={() => appendNumber("4")}>4</CalculatorButton>
        <CalculatorButton onClick={() => appendNumber("5")}>5</CalculatorButton>
        <CalculatorButton onClick={() => appendNumber("6")}>6</CalculatorButton>

        <CalculatorButton
          className="bg-blue-500 text-white"
          onClick={calculate}
        >
          =
        </CalculatorButton>

        <CalculatorButton onClick={() => appendNumber("1")}>1</CalculatorButton>
        <CalculatorButton onClick={() => appendNumber("2")}>2</CalculatorButton>
        <CalculatorButton onClick={() => appendNumber("3")}>3</CalculatorButton>

        <CalculatorButton
          className="col-span-2"
          onClick={() => appendNumber("0")}
        >
          0
        </CalculatorButton>

        <CalculatorButton onClick={() => appendNumber(".")}>
          .
        </CalculatorButton>

      </div>
    </div>
  );
}