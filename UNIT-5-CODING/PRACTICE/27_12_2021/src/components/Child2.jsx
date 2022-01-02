function Child2({handleData}){
    var data1 = "child2 data"
    handleData(data1)
    return <h1>child2 received : {data1}</h1>
}

export default  Child2
