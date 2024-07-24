'use client'

import { useEffect, useState } from "react";

// over here use up  useEffect Hook , swr , useSwr with loading state

function ClientSideDataFetching() {

    const [loading, setLoading] = useState(false);

    const [users, setUser] = useState([]);


    async function fetchListOfUsers() {
        try
        {
            setLoading(true);

            const response = await fetch("https://dummyjson.com/users");
            const data = await response.json();

            if (data?.users)
            {
                setUser(data.users);
                setLoading(false);
            }

            return data.users;
        }
        catch (error)
        {
            throw new Error(error.message);
            setUser([]);
            setLoading(false);
        }
    }




    useEffect(() => {
        fetchListOfUsers();
    }, [])
    

    if (loading) {
        return <h3 className="font-extrabold text-3xl">Loading...</h3>;
    }

return (
    <div className="p-10 ">
        
            <h1>Client Side Data Fetching : User List Page</h1>

            <ul>
                {
                    users && users.length > 0 ?
                    (users.map((user, index) => (
                        <li className="mt-5 cursor-pointer" key={index}>
                            
                            {/* <Link href={`/client-data-fetch/${user.id}`} >{user.firstName}</Link> */}

                            {user.firstName}


                        </li>
                    )))
                    :(null)
                }
            </ul>

        </div>
);
}

export default ClientSideDataFetching;
