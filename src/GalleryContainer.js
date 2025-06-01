import './collage-styles/postcard.css'
import PostcardImage from "./PostcardImage";

function GalleryContainer({postcardPropList, galleryNumber})  {
    const postcardItems = postcardPropList.map((postcard, postcardNumber) => 
        <PostcardImage 
            key={'postcardImage_'+galleryNumber+'_'+postcardNumber} 
            postcardNumber={postcardNumber}
            galleryNumber={galleryNumber}
            {...postcard} /> );
    return (
      <div>
        {postcardItems}
      </div>
    );
};

export default GalleryContainer;