
import Link from 'next/link'
export const Single = ({ users }) => {
    console.log(users)
    return (<>
        <div style={{ fontSize: '40px', color: "blue", textAlign: 'center', textDecoration: "underline" }}>INDIVIDUAL PAGE</div>
        <div style={{ fontSize: '20px', color: "white", backgroundColor: "black", textAlign: 'center', border: "3px solid green", width: "200px" }}> <Link href="/" > BACK TO HOME</Link></div>

        <div>
            {users.map((user, index) => (
                <div key={4}>
                    <h1>{user.name}</h1>
                    <h1>{user.username}</h1>
                    <h1>{user.email}</h1>
                    <h1> Address: {user.address.street}
                        {user.address.suit}
                        {user.address.city}
                        {user.address.zipcode}

                    </h1>
                    <h1>Phone:{user.phone}</h1>
                    <h1>Website:{user.website}</h1>
                    <h1>Company name: {user.company.name}</h1>


                </div>
            ))}

        </div>
    </>)
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

export default Single

