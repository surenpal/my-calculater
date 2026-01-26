import { twMerge } from "tailwind-merge";
import { useState } from "react";

function CalculaterBtn({ children, className }) {
  return (
    <button
      className={twMerge(`bg-gray-300 py-5 aspect-square rounded-2xl shadow-sm text-black
      hover:brightness-95 hover:cursor-pointer active:brightness-75 transition-all duration-100 text-3xl` , 
      className)}
    >
      {children}
    </button>
  );
}

function Calculater() { 

  const [curValue, setValue] = useState("0");

  function handleDecimalClick(i){

setValue((prev) => prev + i);

  }



  return ( 
  <div className="bg-pink-100 p-3 rounded-2xl"> 

  <div className=" bg-gray-300 shadow-sm text-right text-6xl mb-5 rounded-2xl p-4">{curValue}</div>


  
  <div className="grid grid-cols-4 gap-5">

    <CalculaterBtn className="bg-yellow-200 text-black">C</CalculaterBtn>
    <CalculaterBtn >%</CalculaterBtn>
    <CalculaterBtn >√</CalculaterBtn>
    <CalculaterBtn className="bg-orange-400 text-black">÷</CalculaterBtn>
    <CalculaterBtn onClick={() => handleDecimalClick("7")}>7</CalculaterBtn>
    <CalculaterBtn onClick={() => handleDecimalClick("8")}>8</CalculaterBtn>
    <CalculaterBtn onClick={() => handleDecimalClick("9")}>9</CalculaterBtn>
    <CalculaterBtn className="bg-orange-400 text-black">*</CalculaterBtn>
    <CalculaterBtn onClick={() => handleDecimalClick("4")}>4</CalculaterBtn>
    <CalculaterBtn onClick={() => handleDecimalClick("5")}>5</CalculaterBtn>
    <CalculaterBtn onClick={() => handleDecimalClick("6")}>6</CalculaterBtn>
    <CalculaterBtn className="bg-orange-400 text-black">-</CalculaterBtn>
    <CalculaterBtn onClick={() => handleDecimalClick("1")}>1</CalculaterBtn>
    <CalculaterBtn onClick={() => handleDecimalClick("2")}>2</CalculaterBtn>
    <CalculaterBtn onClick={() => handleDecimalClick("3")}>3</CalculaterBtn>
    <CalculaterBtn className="bg-orange-400 text-black">+</CalculaterBtn>
    <CalculaterBtn className="col-span-2 aspect-auto">0</CalculaterBtn>
    <CalculaterBtn>.</CalculaterBtn>
    <CalculaterBtn className="bg-slate-600 text-white">=</CalculaterBtn>
  </div>

  
  </div>
)}

function App() {
  return (
    <div className="bg-gray-800 h-[150vh] flex items-center justify-center">
      <Calculater />
    </div>
  )
}
export default App;