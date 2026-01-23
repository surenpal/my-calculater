function Calculater() { 
  return <div className="bg-pink-100 p-5 rounded-2xl"> 
  
  <div>
    <button>C</button>
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