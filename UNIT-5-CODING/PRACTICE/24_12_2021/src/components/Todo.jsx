import "./todo.css"

function Todos({num,age,height,children}){
    return <h1 className="heading" >{" "}
    age: {age}
     {" "}
     height: {height}
     member : {num}
     {children}
     </h1>
     
  }

export default Todos