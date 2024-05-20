
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "carouselw/01w.webp",
    thumbnail: "carouselw/01w.webp",
  },
  {
    original: "carouselw/02w.webp",
    thumbnail: "carouselw/02w.webp",
  },
  {
    original: "carouselw/03w.webp",
    thumbnail: "carouselw/03w.webp",
  },
  {
    original: "carouselw/04w.webp",
    thumbnail: "carouselw/04w.webp",
  },
  {
    original: "carouselw/05w.webp",
    thumbnail: "carouselw/05w.webp",
  },
  {
    original: "carouselw/06w.webp",
    thumbnail: "carouselw/06w.webp",
  },
  {
    original: "carouselw/07w.webp",
    thumbnail: "carouselw/07w.webp",
  },
  {
    original: "carouselw/08w.webp",
    thumbnail: "carouselw/08w.webp",
  },
  {
    original: "carouselw/01.webp",
    thumbnail: "carouselw/01.webp",
  },
];

const Content2carousel = () => {
  return (
    <>
    <ImageGallery items={images} />
    </>
  )
}

export default Content2carousel

