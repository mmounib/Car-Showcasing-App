import {Filters, HeaderSection, SearchBar} from "@/components/Data";
import {fetchCars} from "@/Utilities";
import headerSection from "@/components/HeaderSection";
import Card from "@/components/Card";
import {fuels, years} from "@/types";

interface CarCardProps {
    model: string;
    make: string;
    mpg: number;
    transmission: string;
    year: number;
    drive: string;
    city_mpg: number;
}

export default async function Home({searchParams}) {
    const allCars = await fetchCars({
        manufacturer: searchParams.manufacturer || '',
        model: searchParams.model || '',
        fuel: searchParams.fuel || '',
        year: searchParams.year || 2022,
        limit: searchParams.limit || 10,
    })
    const isEmpty = allCars.length < 1 || !allCars

    return (
        <div className="">
            <HeaderSection/>
            <div className="mt-32 padding-x padding-y max-width" id="discover">
                <div className="flex flex-col gap-4 text-white">
                    <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
                    <p className="text-gray-300">Explore The Cars You Might Like</p>
                </div>
                <div className="home__filters">
                    <SearchBar/>
                    <div className="home__filter-container">
                        <Filters text="fuel" options={fuels}/>
                        <Filters text="year" options={years}/>
                    </div>
                </div>
                {!isEmpty ? (
                    <section>
                        <div className="grid 2xl:grid-cols-4 xl:grid-cols-3 md:grid-cols-2 grid-cols-1 w-full gap-8 pt-14">
                            {allCars?.map((cars: CarCardProps) => (
                                <Card cars={cars}/>
                            ))}
                        </div>
                    </section>
                ) : (
                    <div className="home__error-container">
                        <h1 className="text-white font-extrabold">{allCars?.message}</h1>
                    </div>
                )}
            </div>
        </div>
    )
}
