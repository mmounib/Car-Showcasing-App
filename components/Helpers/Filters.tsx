'use client'
import {BsCheckAll} from 'react-icons/bs'

import {useRouter} from "next/navigation";
import {Listbox, Transition} from '@headlessui/react'
import {Fragment, useState} from "react";
import Image from "next/image";

interface optionProps {
    title: string,
    value: string
}

interface options {
    text: string,
    options: optionProps[]
}

const Filters = ({text, options}: options) => {
    const [selected, setSelected] = useState(options[0])
    const router = useRouter()


    const addSearchParams = (e: { title: string, value: string }) => {
        const searchParams = new URLSearchParams(window.location.search)

        searchParams.set(options[0].title.toLowerCase(), e.value.toLowerCase())

        const newPath = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPath, {scroll: false})
    }

    return (
        <div className="flex justify-between items-center text-white w-fit">
            <Listbox value={selected} onChange={(e) => {
                setSelected(e);
                addSearchParams(e)
            }}>
                <div className="w-fit relative z-10">
                    <Listbox.Button
                        className="bg-gray-800 justify-between gap-8 px-3.5 bg-opacity-70 rounded-[10px] flex text-left py-2 capitalize">{selected.title}
                        <Image src="/chevron-up-down.svg" alt="Cursor" width={15} height={15}
                               className=" w-[20px] bg-gray-300 rounded-full h-[20px]"/> </Listbox.Button>
                    <Transition as={Fragment} leave="transition ease-in duration-200" leaveFrom="opacity-100"
                                leaveTo="opacity-0">
                        <Listbox.Options
                            className="absolute px-2 flex flex-col gap-2.5 bg-white text-black pb-2 font-extralight w-full rounded-b-md">
                            {options.map((option) => (
                                <Listbox.Option
                                    key={option.title}
                                    value={option}
                                    className="cursor-pointer flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-gray-200 overflow-y-auto"
                                >
                                    <BsCheckAll className="hidden ui-selected:block"/>
                                    {option.title}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </div>
            </Listbox>
        </div>
    );
};

export default Filters;