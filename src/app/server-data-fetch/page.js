import Link from "next/link";


async function fetchListOfUsers() {

    try
    {
        // const response = await fetch("https://dummyjson.com/users",{cache:'no-store'});
        const response = await fetch("https://dummyjson.com/users");
        const data = await response.json();

        return data.users;
        
    }
    catch (error)
    {
        throw new Error(error);
    }

}


async function ServerSideDataFetching() {

    const listOfUsers = await fetchListOfUsers();

    // console.log(listOfUsers);

    return (
        <div className="p-10 ">
            <h1>Server Side Data Fetching : User List Page</h1>

            <ul>
                {
                    listOfUsers && listOfUsers.length > 0 ?
                    (listOfUsers.map((user, index) => (
                        <li className="mt-5 cursor-pointer" key={index}>
                            
                            <Link href={`/server-data-fetch/${user.id}`} >{user.firstName}</Link>
                            
                        </li>
                    )))
                    :(null)
                }
            </ul>

        </div>
    );
}

export default ServerSideDataFetching;

