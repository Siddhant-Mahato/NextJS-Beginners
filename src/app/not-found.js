import Link from "next/link";


export default function NotFound() {
    return (
        <div>
            <h1>This Page Doesn't Exist</h1>
            <Link href={'/'}>Go Back To Home</Link>
        </div>
    );
}
