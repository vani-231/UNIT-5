import {useState} from "react"
export const GroceryInput=({getData})=>{
    const [item,setItem] = useState("")
    const handleChange = (e)=>{
           setItem(e.target.value)
    }

    const handleClick = ()=>{
        getData(item)
    }

    return <>
       <input type="text" placeholder="Enter Your Grocery Item Here" onChange={handleChange} />
       <button onClick={handleClick}>ADD ITEM</button>
    </>
}