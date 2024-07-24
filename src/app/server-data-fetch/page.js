

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

    console.log(listOfUsers);

    return (
        <div>
            <h1>Server Side Data Fetching</h1>

            <ul>
                {
                    listOfUsers && listOfUsers.length > 0 ?
                    (listOfUsers.map((user, index) => (
                        <li key={index}>{user.firstName}</li>
                    )))
                    :null
                }
            </ul>

        </div>
    );
}

export default ServerSideDataFetching;

