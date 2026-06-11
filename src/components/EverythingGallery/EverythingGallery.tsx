import { useDispatch } from "react-redux";
import s from "./EverythingGallery.module.scss"
import { useCallback } from "react";
import { clearPlace } from "../../app/placeSlice";
import { allPhotos } from "../../app/helpers/photos";

function AllPhotos({ photo }: { photo: typeof allPhotos[number] }) {
    return (
        <div className={s.photoFrame}>
                <div
                    className={s.inner}
                    style={{ backgroundImage: `url(${photo.src})` }}
                />
        </div>
    )

}

function EverythingGallery() {
    const dispatch = useDispatch();

    const handleClick = useCallback(() => {
        dispatch(clearPlace());
        sessionStorage.removeItem('selectedPlace');
    }, [dispatch]);

    const pageDescription: string = `this is a place where all photos live`;

    return (
    <div className={s.everythingGalleryContainer}>
        <button className={s.backButton} onClick={handleClick}>BACK</button>
        <p className={s.description}>{pageDescription}</p>
        <div className={s.photosContainer}>
            {allPhotos.map((photo) => (
                <AllPhotos key={photo.id} photo={photo} />
            ))}
        </div>
    </div>
    )
}

export default EverythingGallery;
