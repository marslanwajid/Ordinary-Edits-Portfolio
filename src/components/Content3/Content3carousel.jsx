
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "carouselp/01p.webp",
    thumbnail: "carouselp/01p.webp",
  },
  {
    original: "carouselp/02p.webp",
    thumbnail: "carouselp/02p.webp",
  },
  {
    original: "carouselp/03p.webp",
    thumbnail: "carouselp/03p.webp",
  },
  {
    original: "carouselp/04p.webp",
    thumbnail: "carouselp/04p.webp",
  },
  {
    original: "carouselp/05p.webp",
    thumbnail: "carouselp/05p.webp",
  },
  {
    original: "carouselp/06p.webp",
    thumbnail: "carouselp/06p.webp",
  },
  {
    original: "carouselp/07p.webp",
    thumbnail: "carouselp/07p.webp",
  },
  
];



const Content3carousel = () => {
    return (
     <>
     <ImageGallery items={images} />
     </>
    )
  }
  
  export default Content3carousel
  

