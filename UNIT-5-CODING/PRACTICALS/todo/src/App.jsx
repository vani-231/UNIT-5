
import './App.css';
import { useState } from "react"



function App() {
  const [first, setFirst] = useState(0)
  const [second, setSecond] = useState(0)
  const [third, setThird] = useState(0)
  const addValues = (first, second) => {
    return setFirst(first) + setSecond(second)



  }

  const handleChange = (e) => {
    console.log(e.target.value)

  }
  const subValues = (third) => {
    third = setFirst(first) - setSecond(second)
    return third



  }

  return (
    <div className="App">
      <h1>Calculator</h1>
      <input type="number" value={0} placeholder="a" onChange={() => { handleChange() }} />
      <input type="number" placeholder="b" onChange={handleChange} />
      <button onClick={() => addValues()} >ADDITON</button>
      <button>SUBTRACTION</button>



    </div>
  );
}

export default App;
