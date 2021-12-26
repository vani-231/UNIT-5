//import logo from './logo.svg';
import './App.css';

function App() {
  var systems = ['Android','Blackberry','iPhone','Windows Phone']
  var ma = ['Samsung','HTC','Micromax','Apple']
  return (
    <div className="App">
      <h1 style={{textAlign:'left'}} >Mobile Operating System</h1>
      {systems.map((e)=>(<Todos os={e}/>))}
      <h1 style={{textAlign:'left'}} >Mobile Manufacturers</h1>
      {ma.map((e)=>(<Todos os={e}/>))}

    </div>
  );
}

function Todos({os}){
  return ( <tr>
      <ul>
     <li> {os}</li>
     </ul>
    
  </tr> 
  );
  
}

export default App;
