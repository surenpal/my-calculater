function CalculaterBtn({btn}) {
  return <button className="bg-gray-300 py-3 aspect-square rounded-2xl shadow-sm text-black-100
    hover:brightness-95 hover:cursor-pointer active:brightness-75 transition-all duration-100">C</button>
}

function Calculater() { 
  return <div className="bg-pink-100 p-5 rounded-2xl"> 

  <div className="grid grid-cols-4 gap-5">
    <CalculaterBtn btn={"btn"}>C</CalculaterBtn>
    <CalculaterBtn btn={"btn"}>%</CalculaterBtn>
    <CalculaterBtn btn={"btn"}>√</CalculaterBtn>
    <CalculaterBtn btn={"btn"}>÷</CalculaterBtn>
    <CalculaterBtn btn={"btn"}>7</CalculaterBtn>
    <CalculaterBtn btn={"btn"}>8</CalculaterBtn>
    <CalculaterBtn btn={"btn"}>9</CalculaterBtn>
    <CalculaterBtn btn={"btn"}>*</CalculaterBtn>
    <CalculaterBtn btn={"btn"}>4</CalculaterBtn>
    <CalculaterBtn btn={"btn"}>5</CalculaterBtn>
    <CalculaterBtn btn={"btn"}>6</CalculaterBtn>
    <CalculaterBtn btn={"btn"}>-</CalculaterBtn>
    <CalculaterBtn btn={"btn"}>1</CalculaterBtn>
    <CalculaterBtn btn={"btn"}>2</CalculaterBtn>
    <CalculaterBtn btn={"btn"}>3</CalculaterBtn>
    <CalculaterBtn btn={"btn"}>+</CalculaterBtn>
    <CalculaterBtn btn={"btn"}>0</CalculaterBtn>
    <CalculaterBtn btn={"btn"}>.</CalculaterBtn>
    <CalculaterBtn btn={"btn"}>=</CalculaterBtn>
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