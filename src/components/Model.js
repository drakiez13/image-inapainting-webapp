import React from "react";

function Model({ setModel }) {
    return (
        <>
            <div className="model-container">
                <label className="model-label label">model</label>
                <select className="model-select" onChange={(e) => setModel(e.target.value)}>
                    <option value="celeba_hq_256">CelebA HQ</option>
                    <option value="places_reduced">Places</option>
                    <option value="paris_streetview">Paris Streetview</option>
                </select>
                <p className="model-text">Choose a model depending on the input image.</p>
            </div>
        </>
    )
}

export default Model