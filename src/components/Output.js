import React from "react";
import maskImg from "../assets/img/mask.png"
import inpaint from "../assets/img/inpaint.png"
import maskedImg from "../assets/img/masked_image.png"

function Output() {
    return (
        <>
            <div className="output-component">
                <div>
                    <label className="output-label">mask</label>
                    <img src={maskImg} className="output-img" alt="mask"></img>
                </div>
                <div>
                    <label className="output-label">inpaint</label>
                    <img src={inpaint} className="output-img" alt="inpaint"></img>
                </div>
                <div>
                    <label className="output-label">masked image</label>
                    <img src={maskedImg} className="output-img" alt="masked"></img>
                </div>
            </div>
            <div className="down-button">
                <span><i className="fa-solid fa-download"></i></span>
                <button>Download</button>
            </div>
        </>
    )
}

export default Output