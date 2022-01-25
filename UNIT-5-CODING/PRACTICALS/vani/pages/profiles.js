
import Link from 'next/link'
export const Profiles = ({ users }) => {
    console.log(users)



    return (
        <>
            <div style={{ fontSize: '40px', color: "blue", textAlign: 'center', textDecoration: "underline" }}>MAIN PAGE</div>
            <div>{users.map((user, index) => (
                <div key={index}>

                    <h1>{user.name}</h1>
                    <Link href="/single" ><button>View Details</button></Link>
                </div>
            ))}</div>
        </>
    )

}

export const getServerSideProps = async pageContext => {
    const apiResponse = await fetch('https://jsonplaceholder.typicode.com/users',);
    const users = await apiResponse.json();
    return {
        props: {
            users
        }
    }
}


export default Profiles;