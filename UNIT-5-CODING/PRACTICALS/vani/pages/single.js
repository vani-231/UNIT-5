export const single = ({ user }) => {
    console.log(user)
    return (<>
        <div>
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
    </>)
}

