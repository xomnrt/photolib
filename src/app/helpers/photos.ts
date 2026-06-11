import japanCover from "../../assets/main/main_japan.jpg";
import chinaCover from "../../assets/main/main_china.jpg";
import kazakhstanCover from "../../assets/main/main_kazakhstan.jpg";
import miscCover from "../../assets/main/main_misc.jpg";

const japanPhotoModules = import.meta.glob(
    "../../assets/japan/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP,avif,AVIF}",
    {
        eager: true,
        import: "default",
        query: "?url",
    },
) as Record<string, string>;

const kazakhstanPhotoModules = import.meta.glob(
    "../../assets/kazakhstan/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP,avif,AVIF}",
    {
        eager: true,
        import: "default",
        query: "?url",
    },
) as Record<string, string>;

const chinaPhotoModules = import.meta.glob(
    "../../assets/china/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP,avif,AVIF}",
    {
        eager: true,
        import: "default",
        query: "?url",
    },
) as Record<string, string>;

const miscPhotoModules = import.meta.glob(
    "../../assets/misc/*.{jpg,jpeg,JPG,JPEG,png,PNG,webp,WEBP,avif,AVIF}",
    {
        eager: true,
        import: "default",
        query: "?url",
    },
) as Record<string, string>;

const japanPhotos = Object.entries(japanPhotoModules)
    .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
    .map(([, src]) => src);

const kazakhstanPhotos = Object.entries(kazakhstanPhotoModules)
    .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
    .map(([, src]) => src);

const chinaPhotos = Object.entries(chinaPhotoModules)
    .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
    .map(([, src]) => src);

const miscPhotos = Object.entries(miscPhotoModules)
    .sort(([firstPath], [secondPath]) => firstPath.localeCompare(secondPath))
    .map(([, src]) => src);


export type Place = {
    title: string;
    year: string;
    photos: string[];
    cover?: string;
    coverPosition?: string;
}

export type Photo = {
    id: string;
    place: string;
    src: string;
}

export const places: Place[] = [
    {
        title: "japan",
        year: "2025",
        photos: japanPhotos,
        cover: japanCover,
        coverPosition: "center",
    },
    {
        title: "kazakhstan",
        year: "2024",
        photos: kazakhstanPhotos,
        cover: kazakhstanCover,
        coverPosition: "center 40%",
    },
    {
        title: "china",
        year: "2023",
        photos: chinaPhotos,
        cover: chinaCover,
        coverPosition: "center 10%",
    },
    {
        title: "miscellaneous",
        year: "",
        photos: miscPhotos,
        cover: miscCover,
        coverPosition: "center 86%",
    },

];

export const allPhotos: Photo[] = places.flatMap((place) => (
    place.photos.map((src, index) => ({
        id: `${place.title}-${index}`,
        place: place.title,
        src,
    }))
));
