import { single } from "./single"
import Link from 'next/link'
export const Profiles = ({ users }) => {
    console.log(users)



    return (
        <>
            <div>{users.map((user, index) => (
                <div key={index}>
                    <h1>{user.name}</h1>
                    <button onClick={() => {
                        // console.log(user.name)
                        <h1>{user.name}</h1>
                        // <div key={index}>

                        //     <h1>{user.name}</h1>
                        //     <h1>{user.username}</h1>
                        //     <h1>{user.email}</h1>
                        //     <h1> Address: {user.address.street}
                        //         {user.address.suit}
                        //         {user.address.city}
                        //         {user.address.zipcode}

                        //     </h1>
                        //     <h1>Phone:{user.phone}</h1>
                        //     <h1>Website:{user.website}</h1>
                        //     <h1>Company name: {user.company.name}</h1>
                        // </div>
                    }} >View Details</button>
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