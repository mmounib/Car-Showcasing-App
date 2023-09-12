import {calculateCarRent} from "@/Utilities/fetchApi";
import Image from "next/image";

interface CarCardProps {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    city_mpg: number;
}

interface cardObjects {
    cars: CarCardProps
}

const Card = ({cars}: cardObjects) => {

    const {model, make, transmission, year, city_mpg, drive} = cars
    const carRent = calculateCarRent(city_mpg, year);
    return (
        <div className="bg-gray-800 rounded-[10px]">
            <div className="m-6">
                <h1 className="font-bold text-xl text-white capitalize mb-4">{make} {model}</h1>
                <span className="font-bold text-2xl text-gray-300"><sup className="">$</sup>{carRent}<sub className="text-xs font-extralight">/day</sub></span>
                <div className="object-contain flex items-center relative h-32 justify-center w-full mt-4">
                    <Image src="/hero.png" alt="Cars" className="object-contain" fill priority />
                </div>
            </div>
        </div>
    );
};

export default Card;