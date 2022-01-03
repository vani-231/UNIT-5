export const RecipeItem = ({ title, r, t, i, re }) => {
    console.log("id from ", title, "is ", i)
    return (<>

        <div style={{ overflow: "scroll", width: "700px", height: "250px", border: "5px solid black", marginLeft: "550px", marginTop: "10px", display: "flex", justifyContent: "center", flexDirection: "column" }} >
            <div>
                <button>SORT By Title</button>
                <button>Filter</button>
            </div>
            <div>Recipe Title:- {title}</div>
            <div>Recipe Ingredients :- {i}</div>
            <div>Time To Cook :- {t} hours</div>
            <div>Instructions :- {r}</div>
            <img style={{ width: "130px", marginLeft: "300px" }} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTlVPM99SRYWa6qcbsYX7DmSuyw-MoQe718V14_DauSObByS1yJ" alt="" />


            <button style={{ width: "100px", height: "50px" }} onClick={re} >CARD</button>

        </div>






    </>
    );
}