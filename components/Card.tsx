'use client'

import Image from "next/image";
import {useState} from "react";
import {ButtonChanger, CarDetails} from "@/components/Data";
import {CarCardProps} from "@/types";
// import {calculateCarRent} from "@/Utilities";


const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
};


interface cardObjects {
    cars: CarCardProps
}

const Card = ({cars}: cardObjects) => {

    const {model, make, transmission, year, city_mpg, drive} = cars
    const carRent = calculateCarRent(city_mpg, year);
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="bg-gray-800 rounded-[10px] hover:bg-gray-700 ease duration-300 group">
            <div className="m-6 flex flex-col gap-6 max-sm:gap-4">
                <h1 className="font-bold text-xl text-white capitalize">{make} {model}</h1>
                <span className="font-bold text-2xl text-gray-300"><sup className="">$</sup>{carRent}<sub
                    className="text-xs font-extralight">/day</sub></span>
                <div className="object-contain flex items-center relative h-32 justify-center w-full">
                    <Image src="/hero.png" alt="Cars" className="object-contain" fill priority/>
                </div>
                <div className="relative w-full flex mt-2">
                    <div className="flex items-center justify-between w-full group-hover:invisible">
                        <div className="flex flex-col items-center gap-1.5">
                            <Image src="/steering-wheel.svg" alt="Transmission" width={22} height={22}/>
                            {transmission == 'a' ? (
                                <span className=" font-light text-xs text-white">Automatic</span>
                            ) : (
                                <span className=" font-light text-xs text-white">Manual</span>
                            )}
                        </div>
                        <div className="flex flex-col items-center gap-1.5">
                            <Image src="/tire.svg" alt="Transmission" width={22} height={22}/>
                            <span className=" font-light text-xs text-white">{drive.toUpperCase()}</span>
                        </div>
                        <div className="flex flex-col items-center gap-1.5">
                            <Image src="/gas.svg" alt="Transmission" width={22} height={22}/>
                            <span className=" font-light text-xs text-white">{city_mpg} MPG</span>
                        </div>
                    </div>
                    <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
                        {/*<ButtonChanger text="View More" handleClick={() => setIsOpen(true)}/>*/}
                        <button onClick={() => setIsOpen(true)}
                                className="font-semibold flex text-base py-3 px-8 max-sm:px-6 w-full justify-between rounded-[5px] text-white bg-primary-blue ">
                            <span className="flex-1">View More</span>
                            <Image src="/right-arrow.svg" alt="right-arrow" width={20} height={20} className=""/>
                        </button>
                    </div>
                </div>
                <CarDetails opened={isOpen} closeModal={() => setIsOpen(false)} car={cars}/>
            </div>
        </div>
    );
};

export default Card;