import PhotosComponent from "@/components/Photos"
import { RANDOM_PHOTO_ENDPOINT } from "@/utils/models/endpoints"
import { PhotoData } from "@/utils/models/photo"
import { Metadata } from "next"

// this is an interface we use to get the data we need from the props provided by the system
interface PageProps {
    params: { topic: string },
    searchParams: { [key: string]: string | string[] | undefined }
}

// the const var below will prevent any unspecified topics from being fetched, only topics in the generateStaticParams will be rendered, 
// other topics will redirect to the 404 page
export const dynamicParams = false

// the func below will fetch data for the specified topics during build time and cache them, reducing loading times drastically on client-side
export function generateStaticParams () {
    // we pass all the topics whose images we want to retrieve in the array below
    return ["football", "finance"].map((topic) => ({topic}));
}

export function generateMetadata({params: {topic}}: PageProps): Metadata {
    return { title : `${topic} - NextGallery` }
}


/*  NOTE ---------->
    This page uses generateStaticParams to cache and render static pages at build time even though the url has a dynamic parameter
    Pages that aren't included in the generateStaticParams will be fetched and rendered on first access, then cached for subsequent requests(this can be disabled)
    The parent dir (SSR) is used to organize the pages, we can add as many of these as we'd like to maintain order */
async function TopicPage ({ params: { topic } }: PageProps) {
    const response = await fetch(`${RANDOM_PHOTO_ENDPOINT}?query=${topic}&count=30&client_id=${process.env.UNSPLASH_KEY}`)
    const images: PhotoData[] = await response.json()
    
    return (
        <section className="max-w-7xl py-8 mx-auto">
            <PhotosComponent images={images}></PhotosComponent>
        </section>
    )
}
export default TopicPage