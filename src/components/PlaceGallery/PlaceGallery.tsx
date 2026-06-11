import { useDispatch } from "react-redux";
import s from "./PlaceGallery.module.scss"
import { useCallback, useState } from "react";
import { clearPlace } from "../../app/placeSlice";
import { places } from "../../app/helpers/photos";
import { choosePhoto } from "../../app/photoSlice";

type Props = {
    place: string,
}

function PlaceGallery({ place }: Props) {
    const dispatch = useDispatch();
    const photos = places.find((item) => item.title === place)?.photos ?? [];
    const photoIndexStorageKey = `selectedPhotoIndex:${place}`;
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(() => {
        const savedPhotoIndex = sessionStorage.getItem(photoIndexStorageKey);
        const parsedPhotoIndex = savedPhotoIndex === null ? 0 : Number(savedPhotoIndex);

        return Number.isInteger(parsedPhotoIndex) && parsedPhotoIndex >= 0 && parsedPhotoIndex < photos.length
            ? parsedPhotoIndex
            : 0;
    });

    const handleClick = useCallback(() => {
        dispatch(clearPlace());
        sessionStorage.removeItem('selectedPlace');
    }, [dispatch]);

    const handlePrevPhoto = useCallback(() => {
        setCurrentPhotoIndex((currentIndex) => {
            const nextIndex = currentIndex === 0 ? photos.length - 1 : currentIndex - 1;

            dispatch(choosePhoto(nextIndex));
            sessionStorage.setItem(photoIndexStorageKey, String(nextIndex));

            return nextIndex;
        });
    }, [dispatch, photoIndexStorageKey, photos.length]);

    const handleNextPhoto = useCallback(() => {
        setCurrentPhotoIndex((currentIndex) => {
            const nextIndex = currentIndex === photos.length - 1 ? 0 : currentIndex + 1;

            dispatch(choosePhoto(nextIndex));
            sessionStorage.setItem(photoIndexStorageKey, String(nextIndex));

            return nextIndex;
        });
    }, [dispatch, photoIndexStorageKey, photos.length]);

    const pageDescription: string = "this is from our trip to";
    const miscPage = place === "miscellaneous";

    return (
    <div className={s.placeGalleryContainer}>
        <button className={s.backButton} onClick={handleClick}>BACK</button>
        {!miscPage && <p className={s.description}>{pageDescription} <span>{place}</span></p>}
        {photos.length > 0 ? (
            <div className={s.carousel}>
            <button
                className={s.carouselButton}
                type="button"
                aria-label="Previous photo"
                onClick={handlePrevPhoto}
            >
                ←
            </button>
            <img
                className={s.carouselImage}
                src={photos[currentPhotoIndex]}
                alt=""
            />
            <button
                className={s.carouselButton}
                type="button"
                aria-label="Next photo"
                onClick={handleNextPhoto}
            >
                →
            </button>
            </div>
        ) : (
            <p className={s.description}>no photos yet</p>
        )}
    </div>
    )
}

export default PlaceGallery;
