import { ViewfinderCircleIcon } from "@heroicons/react/24/solid"
import Image from "next/image"

const User = ({userData}) => {
    return (
        <section className="mx-auto w-full md:max-w-5xl flex flex-col md:flex-row border rounded-md bg-white md:h-3/4 px-4">
            <div className="flex flex-col items-center mx-auto basis-2/5 border-e py-8 pe-4">
                <Image className="rounded-3xl object-cover pb-0.5" src={userData.profile_image.large} width={160} height={160} alt={userData.bio} />
                {/* <Link> */}
                <span className="underline cursor-pointer text-gray-800 pb-1">@{userData.username}</span>
                <div className="flex flex-row justify-evenly w-3/4 pb-4">
                    <span className="font-medium text-gray-800 text-base">{userData.followers_count} followers</span>
                    <span className="font-medium text-gray-800 text-base">{userData.following_count} following</span>
                </div>
                <p className="text-center text-gray-500 text-sm mx-8">{userData.bio || "No bio for this user"}</p>
                {/* </Link> */}
            </div>
            <div className="flex flex-col basis-3/5 items-start w-full ps-4 py-8">
                    <div className="flex flex-row gap-x-4 pb-6 justify-between w-full">
                        <span className="text-gray-800 font-semibold">More details</span>
                        <div className="flex flex-row gap-x-2 items-baseline">
                            <span className="text-gray-900 ">{userData.badge.title}</span>
                            <svg className="h-5 w-5" fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" enable-background="new 0 0 24 24">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> 
                                    <g> 
                                        <g> 
                                            <g> 
                                                <path d="M12,16c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8S16.4,16,12,16z M12,2C8.7,2,6,4.7,6,8s2.7,6,6,6s6-2.7,6-6S15.3,2,12,2z"></path> 
                                            </g> 
                                        </g> 
                                        <g>
                                            <g> 
                                                <path d="M16,24c-0.2,0-0.3,0-0.4-0.1L12,22.1l-3.6,1.8c-0.3,0.2-0.7,0.1-1,0C7.2,23.7,7,23.3,7,23v-9c0-0.6,0.4-1,1-1s1,0.4,1,1 v7.4l2.6-1.3c0.3-0.1,0.6-0.1,0.9,0l2.6,1.3V14c0-0.6,0.4-1,1-1s1,0.4,1,1v9c0,0.3-0.2,0.7-0.5,0.9C16.4,23.9,16.2,24,16,24z"></path> 
                                            </g> 
                                        </g> 
                                    </g> 
                                </g>
                            </svg>
                        </div>
                    </div>
                    <div className="flex flex-row justify-between items-baseline pe-2 pb-4 w-full">
                        <span className="text-gray-600 text-sm">First name</span>
                        <span className={`text-gray-800`}>{userData.first_name}</span>
                    </div>
                    <div className="flex flex-row justify-between items-baseline pe-2 pb-4 w-full">
                        <span className="text-gray-600 text-sm">Last name</span>
                        <span className={`text-gray-800`}>{userData.last_name || "Unknown"}</span>
                    </div>
                    <div className="flex flex-row justify-between items-baseline pe-2 pb-4 w-full">
                        <span className="text-gray-600 text-sm">Location</span>
                        <div className="flex flex-row items-center gap-x-1">
                            <span className={`text-gray-800`}>{userData.location ? `${userData.location}` : "No location data"}</span>
                            {/* todo - show position through a dialog/notification when the icon is clicked */}
                            <ViewfinderCircleIcon  className={`w-5 h-5 text-gray-800 cursor-pointer`}/>
                        </div>
                    </div>
            </div>
        </section>
    )
}
export default User