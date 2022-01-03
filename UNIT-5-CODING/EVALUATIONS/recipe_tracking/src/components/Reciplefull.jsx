export const Recipefull = ({ title, r, t, i }) => {
    console.log("id from ", title, "is ", i)
    return (<>

        <div  >

            <div>Recipe Title:- {title}</div>
            <div>Recipe Ingredients :- {i}</div>
            <div>Time To Cook :- {t} hours</div>
            <div>Instructions :- {r}</div>
            <img style={{ width: "130px", marginLeft: "300px" }} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTlVPM99SRYWa6qcbsYX7DmSuyw-MoQe718V14_DauSObByS1yJ" alt="" />




        </div>
    </>
    )
}
