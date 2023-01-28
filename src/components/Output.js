import React from "react";

function Output({outImgs}) {
    return (
        <>
            <div className="output-component">
                <div>
                    <label className="output-label">mask</label>
                    <img src={outImgs.maskImg} className="output-img" alt="mask"></img>
                </div>
                <div>
                    <label className="output-label">inpaint</label>
                    <img src={outImgs.inpaint} className="output-img" alt="inpaint"></img>
                </div>
                <div>
                    <label className="output-label">masked image</label>
                    <img src={outImgs.maskedImg} className="output-img" alt="masked"></img>
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