import { useCallback, type CSSProperties } from "react";
import s from "./MainGallery.module.scss"
import { choosePlace } from "../../app/placeSlice";
import { useDispatch } from "react-redux";
import type { Place } from "../../app/helpers/photos";

function GalleryItem({place}: {place: Place}) {
    const dispatch = useDispatch();
    const coverStyle = {
        "--cover-image": place.cover ? `url(${place.cover})` : "none",
        "--cover-position": place.coverPosition ?? "center",
    } as CSSProperties;

    const handleClick = useCallback(() => {
        dispatch(choosePlace(place.title));
        sessionStorage.setItem('selectedPlace', place.title);
    }, [place, dispatch])

    return (
        <>
        <article className={s.galleryItem} style={coverStyle} onClick={handleClick}>
            <h2 className={s.place}>{place.title}</h2>
            <h2 className={s.year}>{place.year}</h2>
        </article>
        <hr/>
        </>
    )
}

function Gallery({places}: {places: Place[]}) {

    return (
    <div className={s.galleryContainer}>
        {places.map((place) => <GalleryItem key={place.title} place={place}/>)}
    </div>
    )
}

export default Gallery;
