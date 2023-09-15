'use client'

import {Manufacturer} from "@/components/Data";
import {useState} from "react";
import Image from "next/image";
import {BsSearch} from 'react-icons/bs'

const SearchButton = () => (
    <button type="submit" className="z-10 -ml-8 sm-hidden">
        <BsSearch className="text-gray-400 font-black text-xl"/>
        {/*<Image src="/magnifying-glass.svg" alt="SearchIcon" width={45} height={45} className="object-contain"/>*/}
    </button>
)
const SearchBar = () => {
    const [manuf, setManuf] = useState("")
    const [model, setModel] = useState("")
    const handleSearch = () => {

    }
    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <Manufacturer manufacturer={manuf} setManufacturer={setManuf}/>
            </div>
            <div className="searchbar__item">
                <Image src="/model-icon.png" alt="Model" width={25} height={25} className="h-[20px] w-[20px] absolute"/>
                <input type="text" placeholder="Model..." value={model} name="model" onChange={(e) => setModel(e.target.value)} className="searchbar__input bg-gray-300"/>
            </div>
                <SearchButton/>
        </form>
    );
};

export default SearchBar;