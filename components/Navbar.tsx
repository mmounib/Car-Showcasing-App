import Link from "next/link";
import Image from "next/image";
import {ButtonChanger} from "@/components/Data";
import React from "react";

const Navbar = () => {
    return (
        <header className="w-full absolute z-10 max-sm:w-[95%] max-sm:ml-2">
            <nav
                className="max-w-[1440px] mx-auto bg-white bg-opacity-80 py-4 px-6 max-sm:px-4 max-sm:py-1.5 rounded-2xl backdrop-blur-sm  sm:mt-1.5 flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.svg" alt="Logo" width={200} height={200} className="max-sm:w-[200px] max-sm:h-[25px]"/>
                </Link>

                <button className="font-semibold text-base py-3 px-8 max-sm:px-6 rounded-[5px] text-white bg-primary-blue ">Sign In</button>
            </nav>
        </header>
    );
};

export default Navbar;