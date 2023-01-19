import React from 'react'
import Input from '../components/Input';
import Output from '../components/Output';
// import Model from '../components/Model';


function MarkedImage() {
  return (
    <div className='marked-image-app'>
      <div className='input-container'>
        <h4 className='input-text'>Input</h4>
        <Input></Input>
      </div>
      <div className='output-container'>
        <h4 className='output-text'>Output</h4>
        <Output></Output>
      </div>
    </div>
  )
}

export default MarkedImage;
