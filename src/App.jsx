import { twMerge } from "tailwind-merge";

function CalculaterBtn({ children, className }) {
  return (
    <button
      className={twMerge(`bg-gray-300 py-5 aspect-square rounded-2xl shadow-sm text-black-100
      hover:brightness-95 hover:cursor-pointer active:brightness-75 transition-all duration-100 text-3xl` , 
      className)}
    >
      {children}
    </button>
  );
}

function Calculater() { 
  return <div className="bg-pink-100 p-5 rounded-2xl"> 

  <div className="grid grid-cols-4 gap-5">
    <CalculaterBtn className="bg-yellow-200 text-black-300">C</CalculaterBtn>
    <CalculaterBtn >%</CalculaterBtn>
    <CalculaterBtn >√</CalculaterBtn>
    <CalculaterBtn className="bg-orange-400 text-black-300">÷</CalculaterBtn>
    <CalculaterBtn>7</CalculaterBtn>
    <CalculaterBtn>8</CalculaterBtn>
    <CalculaterBtn>9</CalculaterBtn>
    <CalculaterBtn className="bg-orange-400 text-black-300">*</CalculaterBtn>
    <CalculaterBtn>4</CalculaterBtn>
    <CalculaterBtn>5</CalculaterBtn>
    <CalculaterBtn>6</CalculaterBtn>
    <CalculaterBtn className="bg-orange-400 text-black-300">-</CalculaterBtn>
    <CalculaterBtn>1</CalculaterBtn>
    <CalculaterBtn>2</CalculaterBtn>
    <CalculaterBtn>3</CalculaterBtn>
    <CalculaterBtn className="bg-orange-400 text-black-300">+</CalculaterBtn>
    <CalculaterBtn className="col-span-2">0</CalculaterBtn>
    <CalculaterBtn>.</CalculaterBtn>
    <CalculaterBtn className="bg-slate-600 text-white-300">=</CalculaterBtn>
  </div>

  
  </div>
}

function App() {
  return (
    <div className="bg-gray-800 h-screen flex items-center justify-center">
      <Calculater />
    </div>
  )
}
export default App;