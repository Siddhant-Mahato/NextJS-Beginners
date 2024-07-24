import { redirect } from 'next/navigation';


export default function Accounts() {

    // assume that profile info is null

    const userProfileInfo = null;

    if (userProfileInfo === null) { 

        redirect('products?search=product1')
    }

return (
    <div>
        <h1>Accounts</h1>
    </div>
);
}
