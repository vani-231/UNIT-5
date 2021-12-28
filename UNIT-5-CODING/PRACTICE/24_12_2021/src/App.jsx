
import './App.css';

import Todos from './components/Todo'

function App() {
  var arr = [1,2,3,4,5,6,7,8,9]
  return (
    <div className="App">
      {arr.map( (e) => (  
       
       <Todos num={e} age={13} height="6.0" >
         <h1>child H1</h1>
         </Todos>
       
       ))}

    </div>
  );
}


export default App;
