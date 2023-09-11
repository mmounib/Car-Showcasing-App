import {Filters, HeaderSection, SearchBar} from "@/components/Data";

export default function Home() {
    return (
        <div className="overflow-hidden">
            <HeaderSection/>
            <div className="mt-32 flex flex-col max-w-[1440px] mx-auto w-full" id="discover">
                <div className="flex flex-col gap-4 text-white">
                    <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                    <p className="text-gray-300">Explore The Cars You Might Like</p>
                </div>
                <div className="my-12 w-full flex justify-between items-center gap-5 flex-wrap">
                    <SearchBar />
                    <div className="flex flex-wrap gap-4 justify-start">
                        <Filters text="fuel"/>
                        <Filters text="year"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
