'use client'

import Link from "next/link";
import Image from "next/image";
import {ButtonChanger} from "@/components/Data";
import React from "react";
import {useRouter} from "next/navigation";
import {getServerSession, Session} from "next-auth";
import {AuthOptions} from "@/app/api/auth/[...nextauth]/route";

const Navbar = ({session}: any) => {
    const router = useRouter()


    return (
        <header className="w-full absolute z-10 max-sm:w-[95%] max-sm:ml-2">
            <nav
                className="max-w-[1440px] mx-auto bg-white bg-opacity-80 py-4 px-6 max-sm:px-4 max-sm:py-1.5 rounded-2xl backdrop-blur-sm  sm:mt-1.5 flex justify-between items-center">
                <Link href="/">
                    <Image src="/logo.svg" alt="Logo" width={200} height={200}
                           className="max-sm:w-[200px] max-sm:h-[25px]"/>
                </Link>
                {session ? (
                    <div className="flex items-center justify-center gap-8">
                        <h1 className=" text-black font-extrabold text-2xl">HI {session?.user?.name}!</h1>
                        <button onClick={() => router.push('/api/auth/signout', {scroll: false})} className="font-semibold text-white text-lg rounded-[5px] max-sm:text-sm bg-primary-blue py-4 px-8 ">Sign Out</button>
                    </div>
                ) : (

                    <ButtonChanger text="Sign In" handleClick={() => router.push('/api/auth/signin', {scroll: false})}/>
                    // <button
                    //     className="font-semibold text-base py-3 px-8 max-sm:px-6 rounded-[5px] text-white bg-primary-blue "
                    //     onClick={}>
                    //     Sign In
                    // </button>
                )}
            </nav>
        </header>
    );
};

export default Navbar;