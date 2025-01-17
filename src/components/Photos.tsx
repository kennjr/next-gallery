import Image from "next/image"


const PhotosComponent = ({images}) => {
    return (
        <ul role="list" className="px-4 md:px-0 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {images.map((image, index) => (
                <li key={index} className="relative">
                    <div className="group aspect-w-10 aspect-h-7 block w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                        {/* <img src={image.source} alt="" className="pointer-events-none object-cover group-hover:opacity-75" /> */}
                        <Image className="pointer-events-none object-cover group-hover:opacity-75" src={image.urls.raw} width={200} height={200} alt={image.description} />
                        <button type="button" className="absolute inset-0 focus:outline-none ">
                            <span className="sr-only">View details for {image.id}</span>
                        </button>
                    </div>
                    <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{image.id}</p>
                    <p className="pointer-events-none block text-sm font-medium text-gray-500">{image.width}px by {image.height}px</p>
                </li>
            ))}
        </ul>
    )
}
export default PhotosComponent