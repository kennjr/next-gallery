"use client"

import PhotosComponent from "@/components/Photos";
import { PhotoData } from "@/utils/models/photo";
import { SearchData } from "@/utils/models/search";
import { useState } from "react"


/**
 * this page fetches data client-side. In order to not leak API credentials the request is sent to a nextJS route handler that runs on the server
 * this handler then makes the request to the unsplash api and returns the response
 */
const SearchPage = () => {
    const [query, setQuery] = useState("");
    const [images, setImages] = useState<PhotoData[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const processSearchRequest = async (e: any) =>{
        e.preventDefault();

        if(query.length <= 0) return

        if(query){
            try{
                setLoading(true);
                setError(false);
                setImages([]);

                const response = await fetch(`/api/search?query=${query}`);
                const { results }: SearchData = await response.json();

                setImages(results)
            }catch(error){
                setError(true)
            }finally{
                setLoading(false)
            }
        }
    }

    return (
        <section className="max-w-7xl py-8 mx-auto min-h-80">
            <form onSubmit={processSearchRequest} className="flex flex-row gap-x-2 md:gap-x-4 w-full items-center justify-center md:mx-auto mx-1 mb-8">
                <div className="w-4/6 md:w-2/3 lg:w-1/2">
                    <input type="text" name="search" id="search" onChange={(e) => setQuery(e.target.value)} className="block w-full rounded-md border-gray-300 shadow-sm sm:text-sm md:text-base text-gray-800 px-4 py-2 border" placeholder="Type in a search query..."/>
                </div>
                <button className="bg-black text-white hover:bg-gray-800 px-4 py-2 rounded-lg" type="submit" disabled={loading}>Search</button>
            </form>
            { loading && <span>searching...</span> }
            { (!loading && !error && images.length > 0) && <PhotosComponent images={images}></PhotosComponent> }
            { (images.length <= 0 && !loading && !error) && <span>No images were retrieved</span> }
            { error && <span>An error occurred</span> }
        </section>
    )
}
export default SearchPage