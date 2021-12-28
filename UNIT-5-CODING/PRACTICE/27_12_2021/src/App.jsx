import logo from './logo.svg';
import './App.css';

function App() {
  const handledata = (data)=>{
    console.log("parent received",data);
  }
  return (
    <div className="App">
      <h1>child received</h1> 
      <Child1 handledata= {handledata} />    
    </div>
  );
}


function Child1({handledata}){
  const data = "Masaischool"
  return (
    <h1></h1> )
}
export default App;
