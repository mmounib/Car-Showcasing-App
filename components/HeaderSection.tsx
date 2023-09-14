import Image from "next/image";
import {ButtonChanger} from "@/components/Data";

const HeaderSection = () => {
    return (
        <div className=" max-w-[1440px] mt-10 max-sm:mt-2 mx-auto flex relative items-center xl:flex-row flex-col gap-12 ">
            <div className="flex-1 pt-28">
                <h1 className="xl:text-8xl text-6xl font-extrabold text-white">Find, Book, Rent a car - quick and super easy</h1>
                <p className="xl:text-4xl text-2xl font-extralight xl:max-w-[1000px] sm:max-w-[700px] pt-12 text-gray-400">Streamline your car rental experience with our effortless booking process.</p>
                <ButtonChanger text="Explore Cars"/>
            </div>
            <div className="flex">
                <Image src="/hero.png" alt="HeaderImage" width={770} height={70} className="h-[60%]" />
                <div className="bg-hero-bg bg-cover absolute w-[60%] xl:h-screen h-[750px] -z-10 xl:-top-24 xl:-right-[16%] -right-1/4"/>
            </div>
        </div>
    );
};

export default HeaderSection