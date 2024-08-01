import { SEARCH_PHOTOS_ENDPOINT } from "@/utils/models/endpoints";
import { SearchData } from "@/utils/models/search";
import { NextResponse } from "next/server";

export async function GET(request :Request) {
    // we need the query, we'll pass it to the api route through the searchParams
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");

    if(!query) return NextResponse.json({error: "No query found"}, {status: 400})

    const response = await fetch(`${SEARCH_PHOTOS_ENDPOINT}?query=${query}&count=30&client_id=${process.env.UNSPLASH_KEY}`)
    const images: SearchData = await response.json();

    return NextResponse.json(images)
}