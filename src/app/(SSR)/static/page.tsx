import Photo from "@/components/Photo"
import { RANDOM_PHOTO_ENDPOINT } from "@/utils/models/endpoints"
import { PhotoData } from "@/utils/models/photo"

export const metadata = {
    title: "Static Fetching - Next gallery"
}

/*  NOTE ---------->
    This page fetches and caches data at build time, even though the unsplash API return a new random image every
    time we'll get the same image until we recompile the project.
    The parent dir (SSR) is used to organize the pages, we can add as many of these as we'd like to maintain order */
async function StaticPage () {
    const response = await fetch(`${RANDOM_PHOTO_ENDPOINT}?client_id=${process.env.UNSPLASH_KEY}`)
    const image: PhotoData = await response.json()
    
    return (
        <section className="flex flex-col items-center justify-between bg-slate-50 mx-auto py-12">
            <Photo photoData={image}></Photo>
        </section>
    )
}
export default StaticPage