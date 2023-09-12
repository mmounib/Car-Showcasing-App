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
        <div className='search-manufacturer'>
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className='relative w-full'>
                    {/* Button for the combobox. Click on the icon to see the complete dropdown */}
                    <Combobox.Button className='absolute top-[14px]'>
                        <Image
                            src='/car-logo.svg'
                            width={20}
                            height={20}
                            className='ml-4'
                            alt='car logo'
                        />
                    </Combobox.Button>

                    {/* Input field for searching */}
                    <Combobox.Input
                        className='search-manufacturer__input text-white'
                        displayValue={(item: string) => item}
                        onChange={(event) => setOptions(event.target.value)} // Update the search query when the input changes
                        placeholder='Volkswagen...'
                    />

                    {/* Transition for displaying the options */}
                    <Transition
                        as={Fragment} // group multiple elements without introducing an additional DOM node i.e., <></>
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setOptions("")} // Reset the search query after the transition completes
                    >
                        <Combobox.Options
                            className='absolute mt-1 z-[999] max-h-60 w-full overflow-auto rounded-md bg-gray-700 py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                            static
                        >
                            {filteredOptions.length === 0 && options !== "" ? (
                                <Combobox.Option
                                    value={options}
                                    className='search-manufacturer__option text-white'
                                >
                                    Create "{options}"
                                </Combobox.Option>
                            ) : (
                                filteredOptions.map((item) => (
                                    <Combobox.Option
                                        key={item}
                                        className={({active}) =>
                                            `relative search-manufacturer__option ${
                                                active ? "bg-primary-blue text-white" : "text-gray-900"
                                            }`
                                        }
                                        value={item}
                                    >
                                        {({selected, active}) => (
                                            <>
                        <span className={`block truncate ${selected ? "font-medium" : "font-normal"}`}>
                          {item}
                        </span>

                                                {/* Show an active blue background color if the option is selected */}
                                                {selected ? (
                                                    <span
                                                        className={`absolute inset-y-0 left-0 flex items-center pl-3 ${active ? "text-white" : "text-pribg-primary-purple"}`}
                                                    ></span>
                                                ) : null}
                                            </>
                                        )}
                                    </Combobox.Option>
                                ))
                            )}
                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>
    );
};


export default Manufacturer;