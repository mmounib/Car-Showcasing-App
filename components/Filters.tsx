'use client'

import {useRouter} from "next/navigation";
import {Listbox, Transition} from '@headlessui/react'

interface optionProps {
    title: string,
    value: string
}

interface options {
    text: string,
    options: optionProps[]
}

const Filters = ({text, options}: options) => {
    return (
        <div className="flex justify-between items-center text-white">
            <Listbox>
                <Listbox.Button>{text}</Listbox.Button>
                <Listbox.Options>
                    {options.map((option) => (
                        <Listbox.Option
                            key={option.title}
                            value={option.value}

                        >
                            {option.value}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
    );
};

export default Filters;