import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange}) => {
  return (
    <div>
      <div className='center'>
      <div className='form pa4 center br3 shadow-5'>
        <input className=' fa4 pa2 w-70 center' type='text' onChange={onInputChange}/>
        <button className='pointer f4 grow w-30 link ph3 pv2 dib white b bg-red ' >Detect</button>
      </div>
      </div>
      <p className='f4'>This smart iBrain can detect your face. Git it a shoot.</p>
    </div>
  );
};
export default ImageLinkForm;
