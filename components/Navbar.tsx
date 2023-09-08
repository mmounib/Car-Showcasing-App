import Link from "next/link";
import Image from "next/image";
import {ButtonChanger} from "@/components/Data";
import React from "react";

const Navbar = () => {
    return (
        <header className="w-full absolute z-10 ">
            <nav
                className="max-w-[1440px] mx-auto bg-white bg-opacity-80 py-4 px-6 rounded-2xl backdrop-blur-sm lg:mt-6 sm:mt-1.5 flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.svg" alt="Logo" width={200} height={200} className=""/>
                </Link>

                <button className="font-semibold text-base py-3 px-8 rounded-[5px] bg-primary-blue ">Sign In</button>
            </nav>
        </header>
    );
};

export default Navbar;