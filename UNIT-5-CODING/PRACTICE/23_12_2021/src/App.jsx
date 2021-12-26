import logo from './logo.svg';
import './App.css';

function App() {
  var arr = ["1 vani","2 hari","3 chinna","4 chinnu"]
 
  return (
    <div className="App">
      <h1>hello react</h1>
      <hr/>
      <img src={logo} width={540} />
      <hr/>

      <input  id="input" />
       {arr.map( (e) => (  
       
       <Todos num={e}  />
       
       ))}
      {/* <h3 style = {{color: 'white',backgroundColor: 'red'}}>VANI LOVE <i>HARI KUMAR V</i></h3> */}
     

    </div>
  );
}

function Todos({num}){
  return <h1>member : {num}</h1>
}

export default App;
