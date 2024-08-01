import Photo from "@/components/Photo"
import { RANDOM_PHOTO_ENDPOINT } from "@/utils/models/endpoints"
import { PhotoData } from "@/utils/models/photo"

export const metadata = {
    title: "Dynamic Fetching - Next gallery"
}

// the const below tells the framework how often it should fetch new data, in our case we pass 0; 
// so that the page isn't cached but instead new data is fetched on refresh
export const revalidate = 0


/*  NOTE ---------->
    This page fetches data dynamically, every time the page is refreshed a new fetch request is made to the unsplash API
    The parent dir (SSR) is used to organize the pages, we can add as many of these as we'd like to maintain order */
async function DynamicPage () {
  const response = await fetch(`${RANDOM_PHOTO_ENDPOINT}?client_id=${process.env.UNSPLASH_KEY}`)
  const image: PhotoData = await response.json()
  
  return (
      <section className="flex flex-col items-center justify-between bg-slate-50 mx-auto py-12">
          <Photo photoData={image}></Photo>
      </section>
  )
}
  export default DynamicPage