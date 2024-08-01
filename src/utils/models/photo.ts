export interface PhotoData{
    id: string,
    created_at: string,
    updated_at: string,
    width: number,
    height: number,
    color: string,
    blur_hash: string,
    downloads: number,
    likes: number,
    liked_by_user: boolean,
    public_domain: boolean,
    description: string,
    exif: PhotoExifData,
    location: PhotoLocationData,
    tags: PhotoTagData[],
    urls: PhotoUrlsData,
    links: PhotoLinksData,
    user: PhotoOwnerData
}

export interface PhotoTagData {
    title: string
}

export interface PhotoExifData {
    make: string,
    model: string,
    name: string,
    exposure_time: string,
    aperture: string,
    focal_length: string,
    iso: number
}

export interface PhotoLocationData {
    city: string,
    country: string,
    position: PhotoLocationPositionData
}

export interface PhotoLocationPositionData {
    latitude: number,
    longitude: number
}

export interface PhotoUrlsData {
    raw: string,
    full: string,
    regular: string,
    small: string,
    thumb: string
}

export interface PhotoLinksData {
    self: string,
    html: string,
    download: string,
    download_location: string
}

export interface PhotoOwnerData {
    id: string,
    updated_at: string,
    username: string,
    name: string,
    portfolio_url: string,
    bio: string,
    location: string,
    total_likes: number,
    total_photos: number,
    total_collections: number,
    links: PhotoOwnerLinksData
}

export interface PhotoOwnerLinksData {
    self: string,
    html: string,
    photos: string,
    likes: string,
    portfolio: string
}

export enum DataView {
    GENERAL, EXIF, IMAGE_LINKS
}