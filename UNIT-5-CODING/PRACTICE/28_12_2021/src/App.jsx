
import './App.css';
import {useRef,useState} from 'react';
import {Form} from "./components/Form"


function App() {
  const test = useRef(1)
  const [,setD] = useState(1)
  const inputRef = useRef(null)
 
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
     <br /><br />
     <input ref={inputRef} />
     <button onClick={()=>{
       console.log(inputRef.current.value);
     }} >GET DATA</button>

     <div style={{width:"200px", height:"200px",backgroundColor:"aquamarine",margin:"10px"}} ></div>
     <div style={{width:"200px", height:"200px",backgroundColor:"aquamarine",margin:"10px"}} ></div>
     <div style={{width:"200px", height:"200px",backgroundColor:"aquamarine",margin:"10px"}} ></div>
     <div style={{width:"200px", height:"200px",backgroundColor:"aquamarine",margin:"10px"}} ></div>
     <div style={{width:"200px", height:"200px",backgroundColor:"aquamarine",margin:"10px"}} ></div>
     <div style={{width:"200px", height:"200px",backgroundColor:"aquamarine",margin:"10px"}} ></div>
     <div style={{width:"200px", height:"200px",backgroundColor:"aquamarine",margin:"10px"}} ></div>
     <div style={{width:"200px", height:"200px",backgroundColor:"aquamarine",margin:"10px"}} ></div>
     <div style={{width:"200px", height:"200px",backgroundColor:"aquamarine",margin:"10px"}} ></div>
      
     
      <Form/>
      <br /><br />
      <button onClick={()=>{inputRef.current.scrollIntoView({
        behavior:"smooth"
      })}} >SCROLL TO TOP</button>
    </div>
    
  );
}

export default App;
