"use client"

import { DataView, PhotoData } from "@/utils/models/photo"
import { UserIcon } from "@heroicons/react/24/solid"
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/solid"
import { ViewfinderCircleIcon } from "@heroicons/react/24/solid"
import { InformationCircleIcon } from "@heroicons/react/24/solid"
import { XMarkIcon } from "@heroicons/react/24/solid"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid"
import { HeartIcon } from "@heroicons/react/24/solid"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const testPhoto: PhotoData = {
    "id": "Dwu85P9SOIk",
    "created_at": "2016-05-03T11:00:28-04:00",
    "updated_at": "2016-07-10T11:00:01-05:00",
    "width": 2448,
    "height": 3264,
    "color": "6E633A",
    "blur_hash": "LFC$yHwc8^$yIAS$%M%00KxukYIp",
    "downloads": 1345,
    "likes": 24,
    "liked_by_user": false,
    "public_domain": false,
    "description": "A man drinking a coffee. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore consequatur aspernatur deserunt maiores molestiae temporibus aperiam?",
    "exif": {
      "make": "Canon",
      "model": "Canon EOS 40D",
      "name": "Canon, EOS 40D",
      "exposure_time": "0.011111111111111112",
      "aperture": "4.970854",
      "focal_length": "37",
      "iso": 100
    },
    "location": {
      "city": "Montreal",
      "country": "Canada",
      "position": {
        "latitude": 45.473298,
        "longitude": -73.638488
      }
    },
    "tags": [
      { "title": "man" },
      { "title": "drinking" },
      { "title": "coffee" }
    ],
    "urls": {
      "raw": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d",
      "full": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg",
      "regular": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=1080&fit=max",
      "small": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=400&fit=max",
      "thumb": "https://images.unsplash.com/photo-1417325384643-aac51acc9e5d?q=75&fm=jpg&w=200&fit=max"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/Dwu85P9SOIk",
      "html": "https://unsplash.com/photos/Dwu85P9SOIk",
      "download": "https://unsplash.com/photos/Dwu85P9SOIk/download",
      "download_location": "https://api.unsplash.com/photos/Dwu85P9SOIk/download"
    },
    "user": {
      "id": "QPxL2MGqfrw",
      "updated_at": "2016-07-10T11:00:01-05:00",
      "username": "exampleuser",
      "name": "Joe Example",
      "portfolio_url": "https://example.com/",
      "bio": "Just an everyday Joe",
      "location": "Montreal",
      "total_likes": 5,
      "total_photos": 10,
      "total_collections": 13,
      "links": {
        "self": "https://api.unsplash.com/users/exampleuser",
        "html": "https://unsplash.com/exampleuser",
        "photos": "https://api.unsplash.com/users/exampleuser/photos",
        "likes": "https://api.unsplash.com/users/exampleuser/likes",
        "portfolio": "https://api.unsplash.com/users/exampleuser/portfolio"
      }
    }
}
  

const Photo = ({photoData}) => {
    const [dataView, setDataView] = useState(DataView.GENERAL);

    console.log("The photo data", photoData);
    const color = photoData.color.replace("#", "")

    const imageWidth = Math.min(500, photoData.width);
    const imageHeight = (imageWidth / photoData.width) * photoData.height

    const updateDataView = (view: DataView) =>{
        setDataView(view)
    }

    return (
        <div className="w-full md:w-fit flex flex-col md:flex-row border rounded-md bg-white md:h-3/4">
            <div style={{background: `${photoData.color}`}} className="rounded-s-lg flex bg-opacity-20">
                {/* this component allows us to resize images to a fixed size; this reduces wait time since the unnecessarily large image has been resized.
                    it also forces us to provide a width and height; this ensures that element are correctly positioned nothing moves once the image is loaded.

                */}
                <Image className="rounded-s-lg" src={photoData.urls.raw} width={imageWidth} height={imageHeight} alt={photoData.description} />
            </div>
            <section className={`w-2/5 flex flex-auto flex-col md:justify-between py-4 border-s bg-[#${color}] bg-opacity-5`}>
                { dataView === DataView.EXIF && <div className="flex flex-col px-4">
                    <div className="flex flex-row gap-x-4 pb-6">
                        <XMarkIcon onClick={() => updateDataView(DataView.GENERAL)} className="text-gray-900 w-6 h-6 cursor-pointer" />
                        <span className="text-gray-800 font-semibold">EXIF Data</span>
                    </div>
                    <div className="flex flex-row justify-between items-baseline px-2 pb-4">
                        <span className="text-gray-600 text-sm">Camera</span>
                        <span style={{color: `${photoData.color}`}} className={`text-[#${color}] text-[#c0c0c0]`}>{photoData.exif.make}, {photoData.exif.model}</span>
                    </div>
                    <div className="flex flex-row justify-between items-baseline px-2 pb-4">
                        <span className="text-gray-600 text-sm">Aperture</span>
                        <span style={{color: `${photoData.color}`}} className={`text-[#${color}]`}>{photoData.exif.aperture}</span>
                    </div>
                    <div className="flex flex-row justify-between items-baseline px-2 pb-4">
                        <span className="text-gray-600 text-sm">Focal length</span>
                        <span style={{color: `${photoData.color}`}} className={`text-[#${color}]`}>{photoData.exif.focal_length}</span>
                    </div>
                    <div className="flex flex-row justify-between items-baseline px-2 pb-4">
                        <span className="text-gray-600 text-sm">ISO</span>
                        <span style={{color: `${photoData.color}`}} className={`text-[#${color}]`}>{photoData.exif.iso}</span>
                    </div>
                    <div className="flex flex-row justify-between items-baseline px-2 pb-4">
                        <span className="text-gray-600 text-sm">Location</span>
                        <div className="flex flex-row items-center gap-x-1">
                            <span style={{color: `${photoData.color}`}} className={`text-[#${color}]`}>{photoData.location.city ? `${photoData.location.city}, ${photoData.location.country}` : "No location data"}</span>
                            {/* todo - show position through a dialog/notification when the icon is clicked */}
                            <ViewfinderCircleIcon style={{color: `${photoData.color}`}} className={`w-5 h-5 text-[#${color}] cursor-pointer`}/>
                        </div>
                    </div>
                </div> }
                { dataView === DataView.IMAGE_LINKS && <div className="flex flex-col px-4">
                    <div className="flex flex-row gap-x-4 pb-4">
                        <XMarkIcon onClick={() => updateDataView(DataView.GENERAL)} className="text-gray-900 w-6 h-6 cursor-pointer" />
                        <span className="text-gray-800 font-semibold">Image links</span>
                    </div>
                    <p className="text-gray-500 text-xs pb-4">Here are some links related to the image.<br/>*Clicking on any link will lead you to a third-party site*</p>
                    <div className={`flex flex-row items-center gap-x-2 pb-2 text-[${photoData.color}]`}>
                        <Link style={{color: `${photoData.color}`}} className={`text-[#${color}] underline cursor-pointer`} href={photoData.urls.raw}>Raw image</Link>
                        {/* show a tooltip with info about the raw image type */}
                        <InformationCircleIcon style={{color: `${photoData.color}`}} className={`h-4 w-4 text-[#${color}]`}/>
                    </div>
                    <div className="flex flex-row items-center gap-x-2 pb-2">
                        <Link style={{color: `${photoData.color}`}} className={`text-[#${color}] underline cursor-pointer`} href={photoData.urls.full}>Full image</Link>
                        {/* show a tooltip with info about the full image type */}
                        <InformationCircleIcon style={{color: `${photoData.color}`}} className={`h-4 w-4 text-[#${color}]`}/>
                    </div>
                    <div className="flex flex-row items-center gap-x-2 pb-2">
                        <Link style={{color: `${photoData.color}`}} className={`text-[#${color}] underline cursor-pointer`} href={photoData.urls.regular}>Regular image</Link>
                        {/* show a tooltip with info about the regular image type */}
                        <InformationCircleIcon style={{color: `${photoData.color}`}} className={`h-4 w-4 text-[#${color}]`}/>
                    </div>
                    <div className="flex flex-row items-center gap-x-2 pb-2">
                        <Link style={{color: `${photoData.color}`}} className={`text-[#${color}] underline cursor-pointer`} href={photoData.urls.small}>Small image</Link>
                        {/* show a tooltip with info about the small image type */}
                        <InformationCircleIcon style={{color: `${photoData.color}`}} className={`h-4 w-4 text-[#${color}]`}/>
                    </div>
                    <div className="flex flex-row items-center gap-x-2 pb-2">
                        <Link style={{color: `${photoData.color}`}} className={`text-[#${color}] underline cursor-pointer`} href={photoData.user.links.html}>Photographer account</Link>
                        {/* <InformationCircleIcon className={`h-4 w-4 text-[#${color}]`}/> */}
                    </div>
                    <div className="flex flex-row items-center gap-x-2 pb-2">
                        <Link style={{color: `${photoData.color}`}} className={`text-[#${color}] underline cursor-pointer`} href={photoData.user.links.portfolio}>Photographer portfolio</Link>
                        {/* <InformationCircleIcon className={`h-4 w-4 text-[#${color}]`}/> */}
                    </div>
                </div> }
                { dataView === DataView.GENERAL && <div className="px-4">
                    <span className="text-gray-500 text-xs pb-4">Size: {photoData.width}px by {photoData.height}px</span>
                    <p className="text-gray-800 pb-0.5 text-base text-wrap md:w-96">{photoData.description || "No description provided for the image. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, ex!"}</p>
                    <p className={`flex flex-wrap gap-x-2 pb-4 text-pretty md:w-72`}>
                        { photoData.tags.map((tag, index) => {
                            return <span style={{color: `${photoData.color}`}} className={`text-sm underline text-pretty cursor-pointer`} key={index}>{tag.title}</span>
                        }) }
                    </p>
                    <div className="flex justify-between items-center flex-row pb-3 md:pe-2">
                        <span className="text-gray-700 text-base">{photoData.likes} likes</span>
                        <HeartIcon style={{color: `${photoData.color}`}} className={`text-gray-800 w-6 h-6 text-[#${color}]`}/>
                    </div>
                    <div className="flex justify-between items-center flex-row pb-4 md:pe-2">
                        <span className="text-gray-700 text-base">{photoData.downloads} downloads</span>
                        <ArrowDownTrayIcon style={{color: `${photoData.color}`}} className={`w-6 h-6 p-0.5 text-[#${color}]`}/>
                    </div>
                    <section className="border-t pt-4 md:w-96 text-wrap">
                        <div onClick={() => updateDataView(DataView.EXIF)} className="flex justify-between items-center md:pe-2 pb-3 ">
                            <p className="text-gray-700 text-base cursor-default text-wrap w-80">Shot on {photoData.exif.make}, {photoData.exif.model}</p>
                            <ChevronRightIcon style={{color: `${photoData.color}`}} className={`w-6 h-6 p-0.5 text-[#${color}] cursor-pointer`}/>
                        </div>
                        <div onClick={() => updateDataView(DataView.IMAGE_LINKS)} className="flex justify-between items-center md:pe-2">
                            <p className="text-gray-700 text-base cursor-default text-wrap w-80">Image links</p>
                            <ChevronRightIcon style={{color: `${photoData.color}`}} className={`w-6 h-6 p-0.5 text-[#${color}] cursor-pointer`}/>
                        </div>
                    </section>
                </div> }
                <div className="border-t pt-4 px-4 flex flex-row gap-x-4 w-full mt-4">
                    <UserIcon style={{color: `${photoData.color}`}} className={`h-10 w-12 border rounded-full p-1.5`}/>
                    <div className="flex flex-row justify-between items-center w-full pe-2">
                        <div className="flex flex-col">
                            <span className="text-gray-700 font-medium">{photoData.user.username}</span>
                            <span className="text-xs text-gray-600">{photoData.user.location}</span>
                        </div>
                        <ArrowTopRightOnSquareIcon style={{color: `${photoData.color}`}} className={`w-6 h-6 p-0.5 text-[#${color}]`}/>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default Photo