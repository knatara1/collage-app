import { useRef, useState, useEffect} from "react";
import './collage-styles/postcard.css'

function PostcardImage({imagePath, scaleFactor, cardBack, topMargin, leftMargin, startFlipped=false, isVideo=false, postcardNumber, galleryNumber})  {
    const elementRef = useRef(null);
    const [dimensions, setDimensions] = useState({ height: "0px", width: "0px"});
    const [isFlipped, setFlipped] = useState(startFlipped);
    
    useEffect(() => {
      const sizeImageToWindow = () => {
        const aspectRatio = elementRef.current.naturalWidth / elementRef.current.naturalHeight;
        const windowHeight = window.innerHeight;
        const imageHeight = windowHeight * scaleFactor;
        const imageWidth = imageHeight * aspectRatio;
        setDimensions({position: 'absolute', height: imageHeight, width: imageWidth, top: topMargin, left: leftMargin});
      } 
      sizeImageToWindow();
      window.addEventListener("resize", sizeImageToWindow);
      return () => {
        window.removeEventListener("resize", sizeImageToWindow);
      }
    },[scaleFactor, topMargin, leftMargin])

    const handleFlip = () => {
        setFlipped(!isFlipped);
        if(isVideo && isFlipped) {
          let postcardVid = document.getElementById('video_'+galleryNumber+'_'+postcardNumber);
          postcardVid.pause();
        }
        else if(isVideo && !isFlipped) {
          let postcardVid = document.getElementById('video_'+galleryNumber+'_'+postcardNumber);
          postcardVid.play();
        }
    };

    return (
      <div>
          <div className={isFlipped ? "flip-card flipped" : "flip-card"} style={dimensions}>
              <div className="flip-card-inner">
                  <div className="flip-card-front" onClick={handleFlip}>
                      <div className="card-content">
                           <img src={imagePath} className="image-style" alt="text" ref={elementRef}></img>
                      </div>
                  </div>
                  <div className="flip-card-back" onClick={handleFlip}>
                      <div className="card-content" >
                          {!isVideo ?  <p>{cardBack}</p> : <video id={'video_'+galleryNumber+'_'+postcardNumber} 
                          width={'100%'} controls><source src="./assets/test.mp4" type="video/mp4"></source></video>}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    );
};

export default PostcardImage;