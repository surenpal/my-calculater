function Calculater() { 
  return <div className="bg-pink-100 p-5 rounded-2xl"> 
  
  <div className="grid grid-cols-4 gap-5">
    <button className="bg-gray-300 py-3 aspect-square rounded-2xl shadow-sm text-black-100
    hover:brightness-95 hover:cursor-pointer active:brightness-75 transition-all duration-100">C</button>
    <button>%</button>
    <button>√</button>
    <button>÷</button>
    <button>7</button>
    <button>8</button>
    <button>9</button>
    <button>*</button>
    <button>4</button>
    <button>5</button>
    <button>6</button>
    <button>-</button>
    <button>1</button>
    <button>2</button>
    <button>3</button>
    <button>+</button>
    <button>0</button>
    <button>.</button>
    <button>=</button>
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