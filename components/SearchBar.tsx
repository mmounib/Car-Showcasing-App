'use client'

import {Manufacturer} from "@/components/Data";
import {useState} from "react";

const SearchBar = () => {
    const [manuf, setManuf] = useState("")

    const handleSearch = () => {

    }
    return (
        <form className="flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl" onSubmit={handleSearch}>
            <div className="flex-1 max-sm:w-full flex justify-start items-center relative">
                <Manufacturer manufacturer={manuf} setManufacturer={setManuf}/>
            </div>
        </form>
    );
};

export default SearchBar;