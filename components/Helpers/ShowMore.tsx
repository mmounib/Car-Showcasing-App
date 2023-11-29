'use client'

import {useRouter} from "next/navigation";

interface pagination {
    pageNumber: number,
    isNext: boolean
}

const ShowMore = ({pageNumber, isNext}: pagination) => {
    const router = useRouter()

    const addSearchParams = () => {
        const searchParams = new URLSearchParams(window.location.search)
        const newLimit = (pageNumber + 1) * 10

        searchParams.set("limit", newLimit.toString())

        const newPath = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newPath, {scroll: false})
    }
    const handleNav = () => {
        addSearchParams()
    }

    return (
        <div className="w-full gap-5 mt-12 flex items-center justify-center">
            {!isNext && (
                <button type="button" onClick={handleNav}
                        className="bg-primary-blue rounded-[10px] text-white font-semibold text-base py-3 px-8">Show
                    More</button>
            )}
        </div>
    );
};

export default ShowMore;