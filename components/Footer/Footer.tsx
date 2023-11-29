import Image from "next/image";
import Link from "next/link";
import { footerLinks } from "../Helpers/constants";

const Footer = () => {
    return (
        <footer className="flex flex-col gap-14 items-center max-sm:px-7 my-10 border-t-[1px] border-gray-800">
            <div className="flex justify-between max-sm:flex-col w-full my-8 px-16 max-sm:px-10 max-sm:mt-4">
                <div className="flex flex-col gap-6 items-center">
                    <Image src="/logo.svg" alt="Logo" width={170} height={170}
                           className="bg-white bg-opacity-80 py-4 px-6 rounded-2xl backdrop-blur-sm"/>
                    <div className=" text-gray-300 font-extralight">
                        <p>CarShowcasing 2023</p>
                        <p>All Rights Reserved ©</p>
                    </div>
                </div>
                <div className="flex lg:gap-20 max-sm:mt-8 max-sm:justify-center text-gray-300 gap-10 max-sm:w-full">
                    {footerLinks.map((link) => (
                        <div key={link.title} className="flex flex-col gap-7">
                            <h1 className="font-bold text-xl">{link.title}</h1>
                            {link.links.map((lks) => (
                                <Link key={lks.title} href={lks.url}
                                      className="font-extralight text-base">{lks.title}</Link>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-between flex-wrap w-full pt-8 px-8 items-end border-t-[1px] border-gray-800">
                <p className="font-extralight text-gray-300">@2023 CarHub. All rights reserved</p>
                <div className="font-extralight text-gray-300 flex gap-5">
                    <Link href="/">Privacy & Policy</Link>
                    <Link href="/">Terms & Conditions</Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;