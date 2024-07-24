'use client'

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {


  const router = useRouter();

  console.log(router);


  function handleNavigate() { 
    router.push('products');
  }

  // const handleNavigate = () => {
  //   router.push('/products'); // Will give the same navigation
  // }

  return (
    <main className="flex min-h-screen flex-col items-center p-24 ">
      <h1>Welcome to the Next Js Learning System</h1>

      <Link href={"products"}>Naviagate to products page</Link>

      <Link href={"accounts"}>Naviagate to accounts page</Link>

      <h2 className="font-bold mt-3 text-lg">Alternative Way Of Using useRouter</h2>

      <button onClick={handleNavigate}>Naviagate to products page using use Router</button>



    </main>
  );
}
