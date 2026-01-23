function CalculaterBtn({ children, className }) {
  return (
    <button
      className={`bg-gray-300 py-5 aspect-square rounded-2xl shadow-sm text-black-100
      hover:brightness-95 hover:cursor-pointer active:brightness-75 transition-all duration-100 text-3xl ${className}`}
    >
      {children}
    </button>
  );
}

function Calculater() { 
  return <div className="bg-pink-100 p-5 rounded-2xl"> 

  <div className="grid grid-cols-4 gap-5">
    <CalculaterBtn className="bg-pink-200 text-black-300">C</CalculaterBtn>
    <CalculaterBtn>%</CalculaterBtn>
    <CalculaterBtn>√</CalculaterBtn>
    <CalculaterBtn>÷</CalculaterBtn>
    <CalculaterBtn>7</CalculaterBtn>
    <CalculaterBtn>8</CalculaterBtn>
    <CalculaterBtn>9</CalculaterBtn>
    <CalculaterBtn>*</CalculaterBtn>
    <CalculaterBtn>4</CalculaterBtn>
    <CalculaterBtn>5</CalculaterBtn>
    <CalculaterBtn>6</CalculaterBtn>
    <CalculaterBtn>-</CalculaterBtn>
    <CalculaterBtn>1</CalculaterBtn>
    <CalculaterBtn>2</CalculaterBtn>
    <CalculaterBtn>3</CalculaterBtn>
    <CalculaterBtn>+</CalculaterBtn>
    <CalculaterBtn>0</CalculaterBtn>
    <CalculaterBtn>.</CalculaterBtn>
    <CalculaterBtn>=</CalculaterBtn>
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