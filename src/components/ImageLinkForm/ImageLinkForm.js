import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({onInputChange, onButtonSubmit}) => {
    return (
        <div className='ma4 mt0'>
            <h1 className='f3'>
                This App will detect faces on the picture. Try it out now!
            </h1>
            <p className='f6'>
                All you need to do is to copy the URL of an image (for example from Google), and paste it below in the input field. This app will detect every faces on the picture, and will count your submissions in our database which will be shown on the page.
            </p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5'>
                    <input className='f4 pa2 w-70 center' type='text' onChange={onInputChange} placeholder='Copy your LINK/URL here!'/>
                    <button
                        className='w-30 grow f4 ph3 pv2 dib white bg-yellow'
                        onClick={onButtonSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;