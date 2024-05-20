import React from "react";
import "../css/Content2/content2.css";
import $ from 'jquery'


let img1 = "carouselw/01w.webp"
let img2 = "carouselw/02w.webp"
let img3 = "carouselw/03w.webp"
let img4 = "carouselw/04w.webp"
let img5 = "carouselw/05w.webp"
let img6 = "carouselw/06w.webp"
let img7 = "carouselw/07w.webp"
let img8 = "carouselw/01.webp"

function contentt2(){
    return (
        <>
        <div className="main2">
            <div className="left2">

                
            


                <div className="namee2">

                </div>

            </div>

            <div className="right2">


            <div className="editingp">
                <h3>Wedding</h3>
                <h1>Photo Editing</h1>

                </div>

            </div>
            <div className="pics">
                    <img loading="lazy" src={img1} alt="" />
                    <img loading="lazy" src={img2} alt="" />
                    <img loading="lazy" src={img3} alt="" />
                    <img loading="lazy" src={img4} alt="" />
                    <img loading="lazy" src={img5} alt="" />
                    <img loading="lazy" src={img6} alt="" />
                    <img loading="lazy" src={img7} alt="" />
                    <img loading="lazy" src={img8} alt="" />
            </div>
        </div>
        </>
    )
}

export default contentt2;