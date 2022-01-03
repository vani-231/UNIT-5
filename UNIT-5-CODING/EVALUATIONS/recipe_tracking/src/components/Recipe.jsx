import { Addrecipe } from "./RecipeInput"
import { useState } from "react"
import { nanoid } from "nanoid"
import { RecipeItem } from "./RecipeList"
import { Recipefull } from "./Reciplefull"
export const Recipe = () => {

    const [list, setList] = useState([])
    const handleClick = (data) => {

        console.log("parent received data ", data);
        const payload = {
            title: data.title,
            rules: data.rules,
            time: data.time,
            ingredients: data.ingredients,
            status: false,
            id: nanoid(7)
        }
        setList([...list, payload])
    }
    return (<>
        <div style={{ border: '5px solid black', width: "500px", height: "300px" }}>

            <Addrecipe getData={handleClick} />
            {list.map((e) => (

                <RecipeItem {...e} title={e.title} r={e.rules} t={e.time} i={e.ingredients} re={handleClick} />
            ))}
        </div>
        <div style={{ width: "500px", border: "5px solid black", height: "500px", marginTop: "20px" }}>
            {list.map((e) => (

                <Recipefull {...e} title={e.title} r={e.rules} t={e.time} i={e.ingredients} />
            ))}
        </div>

    </>)
}