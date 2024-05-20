import React from "react";
import "../css/Content3/content3.scss"

let img1 = "carouselp/01p.webp"
let img2 = "carouselp/02p.webp"
let img3 = "carouselp/03p.webp"
let img4 = "carouselp/04p.webp"
let img5 = "carouselp/05p.webp"
let img6 = "carouselp/06p.webp"



function content3(){
    return (
        <>
        <div className="main3">
            <div className="left3">

                

            <div className="editingp">
                <h3>Portrait</h3>
                <h1>Photo Editing</h1>
                

                </div>

                <div className="namee3">

                </div>

            </div>

            <div className="right3">


            </div>
            <div className="pics">
                    <img loading="lazy" src={img1} alt="" />
                    <img loading="lazy" src={img2} alt="" />
                    <img loading="lazy" src={img3} alt="" />
                    <img loading="lazy" src={img4} alt="" />
                    <img loading="lazy" src={img5} alt="" />
                    <img loading="lazy" src={img6} alt="" />
                    
                    
            </div>
        </div>
        </>
    )
}

export default content3;