import {GroceryInput} from './GroceryInput';
import {useState} from "react"
import {Grocerylist} from './Grocerylist'
import {nanoid} from "nanoid"
export const Grocery=()=>{
    const [list,setList] = useState([])
    const handleClick = (data)=>{

          console.log("parent received data ",data);
          const payload = {
              title:data,
              status:false,
              id:nanoid(7)
          }
          setList([...list,payload])

    }
    
    return <>
    <GroceryInput getData = {handleClick} />
    {list.map((e)=>(
            <Grocerylist key={e.id} {...e}  />
        ))}
    </>
}