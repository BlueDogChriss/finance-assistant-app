import { useState } from 'react'
import './App.css'
import Home from "./pages/Home/Home"
import Loginas from "./pages/Login/Login"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
      <div>
      <Home/>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

      </div>
    </>
  )
}

export default App
