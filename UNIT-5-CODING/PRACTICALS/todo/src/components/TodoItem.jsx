export const Todoitem = ({title,status,id,handleToggle})=>{
    console.log("id from ",title,"is ",id)
    return (<>
        <div> {title}-{status ? "Done":"Not Done"}</div>
        <button onClick={()=> handleToggle(id)} >Mark as Done</button>
    </>
    );
}