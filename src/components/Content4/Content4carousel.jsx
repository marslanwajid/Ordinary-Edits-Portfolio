
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "carouselr/01r.webp",
    thumbnail: "carouselr/01r.webp",
  },
  {
    original: "carouselr/02r.webp",
    thumbnail: "carouselr/02r.webp",
  },
  {
    original: "carouselr/03r.webp",
    thumbnail: "carouselr/03r.webp",
  },
  {
    original: "carouselr/04r.webp",
    thumbnail: "carouselr/04r.webp",
  },
  {
    original: "carouselr/05r.webp",
    thumbnail: "carouselr/05r.webp",
  },
  
];

const Content4carousel = () => {
  return (
    <>
    <ImageGallery items={images} />
    </>
  )
}

export default Content4carousel
