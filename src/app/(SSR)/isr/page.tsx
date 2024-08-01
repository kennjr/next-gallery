import Photo from "@/components/Photo"
import { RANDOM_PHOTO_ENDPOINT } from "@/utils/models/endpoints"
import { PhotoData } from "@/utils/models/photo"

export const metadata = {
    title: "ISR Fetching - Next gallery"
}

// the const below tells the framework how often it should fetch new data, in our case we pass 0; 
// so that the page isn't cached but instead new data is fetched on refresh
// NOTE - this revalidation will work for the entire page, if we want to do the same but for a specific request the code is in the fetch request made in the page
export const revalidate = 15


/*  NOTE ---------->
    ISR = incremental static regeneration; which means that the data in this page will be updated(regenerated) after a set time period,
    we set the fetch interval period using the revalidate const variable. 
    This page fetches data uses incremental static regeneration to fetch the data; it fetches the data at build, 
    then holds it for a given time before making a new request - the interval is set through the revalidate var & time is in seconds
    The parent dir (SSR) is used to organize the pages, we can add as many of these as we'd like to maintain order */
async function IsrPage () {
    const response = await fetch(`${RANDOM_PHOTO_ENDPOINT}?client_id=${process.env.UNSPLASH_KEY}`, {
        // the line below tells the framework not to cache the data received in the response of this fetch request
        // cache: "no-cache",
        next: { 
            // the line below tells the framework how often the data from this request should be revalidated/updated - the time is in seconds
            revalidate: 15 
        }
    })
    const image: PhotoData = await response.json()
  
    return (
      <section className="flex flex-col items-center justify-between bg-slate-50 mx-auto py-12">
          <Photo photoData={image}></Photo>
      </section>
    )
}
  export default IsrPage