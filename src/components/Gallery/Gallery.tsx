import s from "./Gallery.module.scss"

function GalleryItem() {
    return (
    <article className={s.galleryItem}></article>
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
        <GalleryItem />

    </div>
    )
}

export default Gallery;
