import { useState, useRef } from "react"
export const Addrecipe = ({ getData }) => {
    const [form, setForm] = useState("")
    const ref = useRef(null)

    const handleChange = (e) => {
        console.log(ref.current.files);
        const { name, value, image } = e.target;
        setForm({
            ...form,
            [name]: value,
            [image]: ref.current.files
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getData(form)
    }
    return (<>

        <form onSubmit={handleSubmit}>
            <label >Enter Your Recipe Name :- </label>
            <input onChange={handleChange} name="title" type="text" placeholder="Recipe name" /><br /><br />
            <label >Enter Ingredients For Your Recipe :- </label>
            <input onChange={handleChange} name="ingredients" type="text" placeholder="Ingredients" /><br /><br />
            <label >Time To Cook Recipe :- </label>
            <input onChange={handleChange} name="time" type="number" placeholder="Time To Cook" /><br /><br />
            <label >Image of Recipe :- </label>
            <input onChange={handleChange} ref={ref} type="file" /><br /><br />
            <label >Instructions :- </label>
            <input onChange={handleChange} type="text" name="rules" placeholder="Instructions" /><br /><br />
            <button onSubmit={handleSubmit} onclick={() => {
                const payload = {
                    title: form,
                    status: false
                }
                fetch("http://localhost:3001/recipe", {
                    method: "POST",
                    body: JSON.stringify(payload),
                    headers: {
                        "content-type": "application/json"
                    }
                })
            }

            }  >ADD RECIPE</button>
        </form>

    </>)
}