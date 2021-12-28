
import './App.css';

import {useState} from "react"

function App() {
  
  const [count,setCount] = useState(0)

  const addOne = (value)=>{
    //setCount(count+value)
    setCount((prev)=>{
      if(prev ===6){
        return 0
      }
      return prev + value
    })
  }
  // if(count >5){
  //   return <div>counter reached maximum</div>
  // }
  

  return (
    <div className="App">
      <h1>Counter : {count}</h1>
      {count < 10 && (<div>
        <button onClick={()=>addOne(1)} >ADD 1</button>
      <button onClick={()=>addOne(-1)} >SUB 1</button>
      <h1>Counter is {count%2===0 ? "Even" : "Odd"}</h1>
      </div>)}
      
    </div>
  );
  
}

export default App;
