import React from "react";

function Model({ setModel }) {
    return (
        <>
            <div className="model-container">
                <label className="model-label label">model</label>
                <select className="model-select" onChange={(e) => setModel(e.target.value)}>
                    <option value="CelebA-HQ">CelebA-HQ</option>
                    <option value="ImageNet">ImageNet</option>
                    <option value="Places">Places</option>
                </select>
                <p className="model-text">Choose a model depending on the input image.</p>
            </div>
        </>
    )
}

export default Model