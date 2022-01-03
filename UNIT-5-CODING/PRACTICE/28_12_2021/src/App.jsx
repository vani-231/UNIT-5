
import './App.css';
import {useRef,useState} from 'react';


function App() {
  const test = useRef(1)
  const [d,setD] = useState(1)
     console.log("rerender",test)
  return (
    <div className="App">
        <button onClick={()=>{
            test.current = test.current +1
            console.log(test);
        }} >Increment</button>
      <button onClick={()=>{
        setD((p)=>p+1)
      }}  >rerender</button>
    </div>
  );
}

export default App;
