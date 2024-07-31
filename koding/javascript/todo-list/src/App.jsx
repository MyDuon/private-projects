
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
        <Header/>
        <h1>TODO-LIST</h1>
        <input name="myInput" />
        <button>Add</button>
    </div>
  )
}

export default App
