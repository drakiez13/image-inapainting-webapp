import React, { useState } from 'react'
import Input from '../components/Input';
import Output from '../components/Output';
// import Model from '../components/Model';


function MarkedImage() {
  const [outImgs, setOutImgs] = useState({

  });

  function handleOutputUpdate(output) {
    setOutImgs(output)
  }

  return (
    <div className='marked-image-app'>
      <div className='input-container'>
        <h4 className='input-text'>Input</h4>
        <Input onOutputUpdate={handleOutputUpdate}></Input>
      </div>
      <div className='output-container'>
        <h4 className='output-text'>Output</h4>
        <Output outImgs={outImgs}></Output>
      </div>
    </div>
  )
}

export default MarkedImage;
