export const Grocerylist = ({title,id})=>{
    console.log("hello",title,id);
    const removeData = (e)=>{
       
    }
    return (
        <>
        <div>
            {title}- <button onClick={removeData} >REMOVE</button>
        </div>
        </>
    )
}