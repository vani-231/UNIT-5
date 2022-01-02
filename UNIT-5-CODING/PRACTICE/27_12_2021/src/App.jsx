import Child1 from "./components/Child1"
import './App.css';
import Child2 from "./components/Child2"
import {useState} from 'react'
import Child3 from "./components/Child3"

function App() {
  const [data1,setData1] = useState("")
  const data = "Masai School"
  const handleData = (name)=>{
    
    console.log("receieved :", name);
    setData1(name)
  }
  return (
    <div className="App">
        <h1>Parent</h1>
        <Child1  data={data} />
        <Child2 handleData={handleData} />
        <Child3 data1={data1} />
    </div>
  );
}



export default App;
