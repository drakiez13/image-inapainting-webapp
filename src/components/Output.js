import React from "react";

function Output({mask, masked_image, inpainted_image}) {
    return (
        <>
            <div className="output-component">
                <div>
                    <label className="output-label">mask</label>
                    <img src={mask} className="output-img" alt="mask"></img>
                </div>
                <div>
                    <label className="output-label">masked image</label>
                    <img src={masked_image} className="output-img" alt="inpaint"></img>
                </div>
                <div>
                    <label className="output-label">inpainted image</label>
                    <img src={inpainted_image} className="output-img" alt="masked"></img>
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