'use client'

import {Combobox, Transition} from '@headlessui/react'
import Image from "next/image";
import {Fragment, useState} from "react";
import {manufacturers} from "@/components/constants";

interface manufacturerProps {
    manufacturer: string,
    setManufacturer: (manufacturer: string) => void;
}

const Manufacturer = ({manufacturer, setManufacturer}: manufacturerProps) => {
    const [options, setOptions] = useState('')

    const filteredOptions = options === "" ? manufacturers : manufacturers.filter((manu) => manu.toLowerCase().startsWith(options.toLowerCase()))
    return (
        <div className="flex ">
            <Combobox>
                <div className="relative w-full ">
                    <Combobox.Button className="text-white absolute pl-1.5">
                        <Image src='/car-logo.svg' alt="Search" width={30} height={30} className=""/>
                    </Combobox.Button>
                    <Combobox.Input
                        className="pl-11 focus:border-0 focus:outline-0 text-white bg-white bg-opacity-20 py-1.5 rounded-tl-[5px]"
                        placeholder="Volkswagen" displayValue={(manu: string) => manu}
                        onChange={(e) => setOptions(e.target.value)}/>
                    <Transition as={Fragment} leave="transition ease-in duration-150" leaveFrom="opacity-100"
                                leaveTo="opacity-0" afterLeave={() => setOptions('')}>
                        <Combobox.Options className="bg-gray-100 bg-opacity-10 text-white rounded-[10px]">
                            {filteredOptions.map((manu) => (
                                <Combobox.Option key={manu} value={manu} className="py-2 px-4 hover:bg-gray-800">
                                    {manu}
                                </Combobox.Option>
                            ))}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>

            <Combobox>
                <div className="relative w-full flex items-center">
                    <Combobox.Button className="text-white absolute pl-1.5">
                        <Image src='/model-icon.png' alt="Search" width={30} height={30} className=""/>
                    </Combobox.Button>
                    <Combobox.Input
                        className="pl-11 focus:border-0 focus:outline-0 text-white bg-white bg-opacity-20 py-1.5 rounded-tr-[5px]"
                        placeholder="Model"/>
                </div>
            </Combobox>
        </div>
    );
};

export default Manufacturer;