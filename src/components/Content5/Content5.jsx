import React from "react";
import "../css/Content5/content5.scss"


let img1 = "carouselpd/01pd.webp"
let img2 = "carouselpd/02pd.webp"
let img3 = "carouselpd/03pd.webp"
let img4 = "carouselpd/04pd.webp"
let img5 = "carouselpd/05pd.webp"
let img6 = "carouselpd/06pd.webp"
let img7 = "carouselpd/07pd.webp"
let img8 = "carouselpd/08pd.webp"
let img9 = "carouselpd/09pd.webp"
let img10 = "carouselpd/10pd.webp"

function content5(){
    return (
        <>
        <div className="main5">
            <div className="left5">

                

            <div className="editingp">
                <h3>Product</h3>
                <h1>Photo Editing</h1>
                

                </div>

                <div className="namee5">

                </div>

            </div>

            <div className="right5">


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
                    <img loading="lazy" src={img9} alt="" />
                    <img loading="lazy" src={img10} alt="" />
            </div>
        </div>
        </>
    )
}

export default content5;