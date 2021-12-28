import {useState} from "react"
import './App.css';

function App() {
    const [count,setCount] = useState(0)
    const changeCount = (value)=>{
      setCount(count+value)
    }
  return (
    <div className="App">
      <h1>Counter : {count}</h1>
      <button onClick={()=> changeCount(1)}>INCREMENT 1</button>{"  "}
       <button onClick={() => changeCount(-1)}>DECREMENT 1</button>{"  "}
       <button onClick={() => changeCount(count*1)}>DOUBLE</button>{"  "}
    </div>
  );
}

export default App;
