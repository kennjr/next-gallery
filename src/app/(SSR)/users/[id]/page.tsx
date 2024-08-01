import User from "@/components/User"
import { USER_ENDPOINT } from "@/utils/models/endpoints"
import { UserData } from "@/utils/models/user"
import { Metadata } from "next"
import { notFound } from "next/navigation"

interface PageProps {
  params: { id: string }
}

export async function generateMetadata({params: {id}}: PageProps): Promise<Metadata>{
  // we make this request here as well so that we can set the metadata based on what we get from the server
  // the framework will de-duplicate the requests; meaning only one request will go out(since we're making it here & in the component)
  // and the 2nd request will get the response from the first request
  const response = await fetch(`${USER_ENDPOINT}/${id}?client_id=${process.env.UNSPLASH_KEY}`);
  if(response.status == 404){
    return {
      title: "No User found - NextGallery"
    }
  }
  const user: UserData = await response.json()
  return {
    title: `${user.username} - NextGallery`
  }
}

const testUser: UserData = {
    "id": "pXhwzz1JtQU",
    "updated_at": "2016-07-10T11:00:01-05:00",
    "username": "jimmyexample",
    "name": "James Example",
    "first_name": "James",
    "last_name": "Example",
    "instagram_username": "instantgrammer",
    "twitter_username": "jimmy",
    "portfolio_url": null,
    "bio": "The user's bio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum consectetur consequatur modi sunt assumenda, explicabo iusto, officiis natus aliquam aliquid reprehenderit sint expedita iste esse recusandae, laboriosam praesentium beatae suscipit!",
    "location": "Montreal, Qc",
    "total_likes": 20,
    "total_photos": 10,
    "total_collections": 5,
    "followed_by_user": false,
    "followers_count": 300,
    "following_count": 25,
    "downloads": 225974,
    "social": {
      "instagram_username": "instantgrammer",
      "portfolio_url": "",
      "twitter_username": "jimmy"
    },
    "profile_image": {
      "small": "https://images.unsplash.com/photo-1722172118908-1a97c312ce8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      "medium": "https://images.unsplash.com/photo-1722172118908-1a97c312ce8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8",
      "large": "https://images.unsplash.com/photo-1722172118908-1a97c312ce8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"
    },
    "badge": {
      "title": "Book contributor",
      "primary": true,
      "slug": "book-contributor",
      "link": "https://book.unsplash.com"
    },
    "links": {
      "self": "https://api.unsplash.com/users/jimmyexample",
      "html": "https://unsplash.com/jimmyexample",
      "photos": "https://api.unsplash.com/users/jimmyexample/photos",
      "likes": "https://api.unsplash.com/users/jimmyexample/likes",
      "portfolio": "https://api.unsplash.com/users/jimmyexample/portfolio"
    }
}

async function UserPage ({params: {id}}: PageProps) {
  const response = await fetch(`${USER_ENDPOINT}/${id}?client_id=${process.env.UNSPLASH_KEY}`);
  // we add this line so that the user is redirected to the not found page if no user was found
  if(response.status == 404) notFound()
  const user: UserData = await response.json();
  return (
    <section className="h-[90vh] mx-auto py-12">
      <User userData={user}></User>
    </section>
  )
}
export default UserPage