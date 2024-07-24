'use client'

import { usePathname, useSearchParams } from "next/navigation";

export default function Cart() {

    const pathName = usePathname();
    console.log(pathName);

    const searchparams = useSearchParams();
    console.log(searchparams.get("search"), searchparams.get("randomvalue"));

    return (
        <div>
            This is Cart Component
        </div>
    );
}