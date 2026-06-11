import s from "./Gallery.module.scss"

function GalleryItem() {
    return (
    <article className={s.galleryItem}>
        <h2 className={s.city}>city</h2>
        <h2 className={s.year}>2xxx</h2>
    </article>
    )
}

function Gallery() {
    return (
    <div className={s.galleryContainer}>
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
        <GalleryItem />
    </div>
    )
}

export default Gallery;
