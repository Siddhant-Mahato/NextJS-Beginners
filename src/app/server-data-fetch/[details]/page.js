import Link from "next/link";

async function fetchUserDetails(currentUserId) {
    
    try
    {
        const response = await fetch(`https://dummyjson.com/users/${currentUserId}`);
        const data = await response.json();

        return data;
    }
    catch (error)
    {
        throw new Error(error.message);
    }


}



export default async function UserDetails({ params }) {
    
    // console.log(params);

    const userDetails = await fetchUserDetails(params.details);

    return (
        <div>
            <h1>User Details Page</h1>

            <h2>User Name: {userDetails?.firstname} {userDetails?.lastname}</h2>
            <p>Email: {userDetails?.email}</p>
            <p>Age: {userDetails?.age}</p>
            <p>Phone: {userDetails?.phone}</p>
            <p>BirthDate:{userDetails?.birthDate}</p>

        </div>
    );
}

