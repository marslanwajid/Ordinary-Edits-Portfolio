import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "carouselpd/01pd.webp",
    thumbnail: "carouselpd/01pd.webp",
  },
  {
    original: "carouselpd/02pd.webp",
    thumbnail: "carouselpd/02pd.webp",
  },
  {
    original: "carouselpd/03pd.webp",
    thumbnail: "carouselpd/03pd.webp",
  },
  {
    original: "carouselpd/04pd.webp",
    thumbnail: "carouselpd/04pd.webp",
  },
  {
    original: "carouselpd/05pd.webp",
    thumbnail: "carouselpd/05pd.webp",
  },
  {
    original: "carouselpd/06pd.webp",
    thumbnail: "carouselpd/06pd.webp",
  },
  {
    original: "carouselpd/07pd.webp",
    thumbnail: "carouselpd/07pd.webp",
  },
  {
    original: "carouselpd/08pd.webp",
    thumbnail: "carouselpd/08pd.webp",
  },
  {
    original: "carouselpd/09pd.webp",
    thumbnail: "carouselpd/09pd.webp",
  },
  {
    original: "carouselpd/10pd.webp",
    thumbnail: "carouselpd/10pd.webp",
  },
  
];


const Content5carousel = () => {
  return (
    <>
    <ImageGallery items={images} />
    </>
  )
}

export default Content5carousel
