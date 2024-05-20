import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
  {
    original: "carouselw/01w.webp",
    // thumbnail: "carouselw/01w.webp",
  },
  {
    original: "carouselw/02w.webp",
    // thumbnail: "carouselw/02w.webp",
  },
  {
    original:  "carouselw/03w.webp",
    // thumbnail: "carouselw/03w.webp",
  },
  {
    original:  "carouselw/04w.webp",
    // thumbnail: "carouselw/04w.webp",
  },
  {
    original:  "carouselw/05w.webp",
    // thumbnail: "carouselw/05w.webp",
  },
  {
    original:  "carouselw/06w.webp",
    // thumbnail: "carouselw/06w.webp",
  },
  {
    original:  "carouselw/07w.webp",
    // thumbnail: "carouselw/06w.webp",
  },
  {
    original:  "carouselw/08w.webp",
    // thumbnail: "carouselw/06w.webp",
  },
  {
    original:  "carouselw/09w.webp",
    // thumbnail: "carouselw/06w.webp",
  },
  {
    original:  "carouselw/10w.webp",
    // thumbnail: "carouselw/06w.webp",
  },
  {
    original:  "carouselw/11w.webp",
    // thumbnail: "carouselw/06w.webp",
  },
  {
    original:  "carouselw/12w.webp",
    // thumbnail: "carouselw/06w.webp",
  },
  {
    original:  "carouselw/13w.webp",
    // thumbnail: "carouselw/06w.webp",
  },
  {
    original:  "carouselw/14w.webp",
    // thumbnail: "carouselw/06w.webp",
  },
  {
    original:  "carouselw/15w.webp",
    // thumbnail: "carouselw/06w.webp",
  },
  {
    original:  "carouselp/01p.webp",
    // thumbnail: "carouselp/06p.webp",
  },
  {
    original:  "carouselp/02p.webp",
    // thumbnail: "carouselp/06p.webp",
  },
  {
    original:  "carouselp/03p.webp",
    // thumbnail: "carouselp/06p.webp",
  },
  {
    original:  "carouselp/04p.webp",
    // thumbnail: "carouselp/06p.webp",
  },
  {
    original:  "carouselp/05p.webp",
    // thumbnail: "carouselp/06p.webp",
  },
  {
    original:  "carouselp/06p.webp",
    // thumbnail: "carouselp/06p.webp",
  },
  {
    original:  "carouselp/07p.webp",
    // thumbnail: "carouselp/06p.webp",
  },
  {
    original:  "carouselpd/01pd.webp",
    // thumbnail: "carouselpd/06pd.webp",
  },
  {
    original:  "carouselpd/02pd.webp",
    // thumbnail: "carouselpd/06pd.webp",
  },
  {
    original:  "carouselpd/03pd.webp",
    // thumbnail: "carouselpd/06pd.webp",
  },
  {
    original:  "carouselpd/04pd.webp",
    // thumbnail: "carouselpd/06pd.webp",
  },
  {
    original:  "carouselpd/05pd.webp",
    // thumbnail: "carouselpd/06pd.jpg",
  },
  {
    original:  "carouselpd/06pd.webp",
    // thumbnail: "carouselpd/06pd.webp",
  },
  {
    original:  "carouselpd/07pd.webp",
    // thumbnail: "carouselpd/06pd.webp",
  },
  {
    original:  "carouselpd/08pd.webp",
    // thumbnail: "carouselpd/06pd.webp",
  },
  {
    original:  "carouselpd/09pd.webp",
    // thumbnail: "carouselpd/06pd.jpg",
  },
  {
    original:  "carouselpd/10pd.webp",
    // thumbnail: "carouselpd/06pd.jpg",
  },
  {
    original:  "carouselr/01r.webp",
    // thumbnail: "carouselr/06r.webp",
  },
  {
    original:  "carouselr/02r.webp",
    // thumbnail: "carouselr/06r.webp",
  },
  {
    original:  "carouselr/03r.webp",
    // thumbnail: "carouselr/06r.webp",
  },
  {
    original:  "carouselr/04r.webp",
    // thumbnail: "carouselr/06r.webp",
  },
  {
    original:  "carouselr/05r.webp",
    // thumbnail: "carouselr/06r.webp",
  },
  
];

import React from 'react'

const Imggal = () => {
  return (
    <>
    <ImageGallery autoPlay="true" items={images} />
    </>
  )
}

export default Imggal
