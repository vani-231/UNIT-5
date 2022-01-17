import { useState } from 'react'
export const EmployeForm = () => {
    const [form, setForm] = useState({})
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value,

        })

    }
    //console.log(form)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }
    return (<>
        <div style={{ display: 'grid', gridTemplateColumns: '30% 68%', gridGap: '20px' }} >
            <form style={{ border: '10px solid aquamarine', height: "400px" }} onSubmit={handleSubmit} >
                <label>Enter Your Name :- </label>
                <input
                    type="text"
                    name="username"
                    onChange={handleChange}
                    placeholder="Enter your name" /><br /><br />
                <label >Age :- </label>
                <input
                    type="number"
                    onChange={handleChange}
                    name="age"
                    placeholder="age" /><br /><br />
                <label>Address :- </label>
                <input type="address"
                    name="address"
                    onChange={handleChange}
                    placeholder="address" /><br /><br />
                <label htmlFor="">Department :- </label>
                <select  >
                    <option name="dept" onChange={handleChange} >D1</option>
                    <option name="dept" onChange={handleChange} >D2</option>
                    <option name="dept" onChange={handleChange}>D3</option>
                </select><br /><br />
                <label htmlFor="">Salary :- </label>
                <input type="number"
                    name="sal"
                    onChange={handleChange} placeholder="salary" /><br /><br />
                <label htmlFor="" onChange={handleChange}>Martial Status :- </label>
                <input
                    type="checkbox"
                    name="m"
                    onChange={handleChange} />Married
                <input type="checkbox"
                    onChange={handleChange} />UnMarried
                <input type="checkbox"
                    onChange={handleChange}
                />Single<br /><br />

                <label htmlFor="">Image :- </label>
                <input type="file" name="image" onChange={handleChange} /><br /><br />
                <button type="submit" >Submit</button>

            </form>

            <div style={{ border: '10px solid aquamarine' }}>


            </div>
        </div>

    </>);
}