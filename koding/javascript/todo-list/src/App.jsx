import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <h1>TODO-LIST</h1>
        <input name="myInput" />
        <button>Add</button>
    </div>
  )
}

export default App
