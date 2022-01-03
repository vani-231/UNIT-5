
export const Grocerylist = ({title,id,removeData})=>{
    console.log("hello",title,id);
    
    return (
        <>
        <div>
            {title} - <button onClick={removeData} >REMOVE</button>
        </div>
        </>
    )
}