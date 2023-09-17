'use client'

import {Manufacturer} from "@/components/Data";
import React, {useState} from "react";
import Image from "next/image";
import {BsSearch} from 'react-icons/bs'
import {useRouter} from "next/navigation";

const SearchButton = ({hidden}: { hidden: string }) => (
    <button type="submit" className={`z-10 -ml-8 ${hidden}`}>
        <BsSearch className="text-gray-400 font-black text-xl"/>
        {/*<Image src="/magnifying-glass.svg" alt="SearchIcon" width={45} height={45} className="object-contain"/>*/}
    </button>
)
const SearchBar = () => {
    const [manuf, setManuf] = useState("")
    const [model, setModel] = useState("")
    const router = useRouter()

    const updateParams = (model: string, manufacturer: string) => {
        const searchParams = new URLSearchParams(window.location.search)

        if (model)
            searchParams.set("model", model)
        else
            searchParams.delete("model")
        if (manufacturer)
            searchParams.set("manufacturer", manufacturer)
        else
            searchParams.delete("manufacturer")

        const newParams = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newParams, {scroll: false})
    }

    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (manuf === '' && model === '')
            return alert("Need To Fill In The Input Element")
        updateParams(model.toLowerCase(), manuf.toLowerCase());
    }
    return (
        <form className="searchbar" onSubmit={handleSearch}>
            <div className="searchbar__item">
                <Manufacturer manufacturer={manuf} setManufacturer={setManuf}/>
                <SearchButton hidden="sm:hidden"/>
            </div>
            <div className="searchbar__item">
                <Image src="/model-icon.png" alt="Model" width={25} height={25}
                       className="h-[20px] w-[20px] absolute ml-3"/>
                <input type="text" placeholder="Model..." value={model} name="model"
                       onChange={(e) => setModel(e.target.value)} className="searchbar__input bg-gray-300"/>
                <SearchButton hidden="sm:hidden"/>
            </div>
            <SearchButton hidden="max-sm:hidden"/>
        </form>
    );
};

export default SearchBar;