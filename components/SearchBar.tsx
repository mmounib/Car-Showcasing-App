'use client'

import {Manufacturer} from "@/components/Data";
import {useState} from "react";

const SearchBar = () => {
    const [manuf, setManuf] = useState("")

    const handleSearch = () => {

    }
    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <Manufacturer manufacturer={manuf} setManufacturer={setManuf}/>
            </div>
        </form>
    );
};

export default SearchBar;