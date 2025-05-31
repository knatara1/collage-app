import { useState } from 'react';
import './collage-styles/galleryRotater.css'
import GalleryContainer from './GalleryContainer';

function GalleryRotater({galleryInfoLists})  {
    const [galleryNumber, setGalleryNumber] = useState(0);

    function rotateNextGallery() {
      setGalleryNumber( (galleryNumber+1) % galleryInfoLists.length)
    }

    function rotatePreviousGallery() {
      const numGalleries = galleryInfoLists.length;
      setGalleryNumber( (((galleryNumber-1) % numGalleries) + numGalleries) % numGalleries)
    }

    return (
      <div className='galleryRotater'>
        <GalleryContainer postcardPropList={galleryInfoLists[galleryNumber]} galleryNumber={galleryNumber} />
        <div id='previousButtonContainer' onClick={rotatePreviousGallery}>
          <button className='rotaterButton'>Previous Gallery</button>
        </div>
        <div id='nextButtonContainer' onClick={rotateNextGallery}>
          <button className='rotaterButton'>Next Gallery</button>
        </div>
      </div>
    );
};

export default GalleryRotater;