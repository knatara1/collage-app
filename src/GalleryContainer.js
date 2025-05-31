import './collage-styles/postcard.css'
import PostcardImage from "./PostcardImage";

function GalleryContainer({postcardPropList, galleryNumber})  {
    const postcardItems = postcardPropList.map((postcard, postcardNumber) => 
        <PostcardImage key={'postcardImage_'+galleryNumber+'_'+postcardNumber} imagePath={postcard.imagePath} scaleFactor={postcard.scaleFactor} 
        cardBack={postcard.cardBack} topMargin={postcard.topMargin} leftMargin={postcard.leftMargin} startFlipped={'startFlipped' in postcard ? postcard.startFlipped : false}
        isVideo={'isVideo' in postcard? postcard.isVideo : false} postcardNumber={postcardNumber} galleryNumber={galleryNumber}/> );
    return (
      <div>
        {postcardItems}
      </div>
    );
};

export default GalleryContainer;