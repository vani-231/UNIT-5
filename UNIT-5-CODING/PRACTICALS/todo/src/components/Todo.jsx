import { useState } from "react"
import { Todoinput } from "./TodoInput"
import {Todoitem} from "./TodoItem"
import {nanoid} from "nanoid"


export const Todo =()=>{
    const [list,setList] = useState([])
    const handleClick = (data)=>{
      console.log("parent received",data);
      const payload = {
        title:data,
        status:false,
        id:nanoid(7)
      }
      setList([...list,payload])
    }
    const handleToggle = (id)=>{

    }
    
    return <>
    <Todoinput getData={handleClick} />
    {list.map((e)=>(
        <Todoitem key={e.id} {...e} handleToggle={handleToggle} />

    ))}
    </>
}