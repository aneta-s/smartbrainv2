import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div>
      <p className='f3'>This smart iBrain can detect your face. Git it a shoot.</p>
      <div className='center'>
      <div className='form pa4 center br3 shadow-5'>
        <input className=' fa4 pa2 w-70 center' type='text' />
        <button className='pointer f4 grow w-30 link ph3 pv2 dib white b bg-red '>Defect</button>
      </div>
      </div>
    </div>
  );
};
export default ImageLinkForm;
