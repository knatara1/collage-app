import './App.css';
import GalleryRotater from './GalleryRotater';

const INTRODUCTION_MESSAGE = `Happy Birthday Emma!!!!🎉🎉🎉🎉🎉\n
From talking to you recently, I know you have been starting to lose a bit of your passion for technology and coding specifically. However, I think that you have too much potential to lose that passion so soon.\n 
So, to help show you how powerful code can be in the right hands, I made you this e-card with past memories 😊.\n
Each picture can be clicked to reveal a message and/or video and once you are done, just click anywhere on the background to go the next page. Have fun exploring all the surprises on this card!!\n
You can also flip back from text to the picture. For example if you flip this card over you will see a picture of us at Saravana Bhavan during Diwali.`

const PARTY_UP_MESSAGE = `I remember this day being the first time I met a lot of your friends outside of work including Yakov, Larry, Jen and Maya.\n
Also, remember this being the first time I got high so thank you for giving me the chance to try every 'being high' stereotype 😝.\n
PS: Check the tile below to see a funny video 👀`

const COVFEFE_MESSAGE = `I honestly am not sure I remember too much about this specific day, but I do remember going to the mall 
with you a lot mainly to get bubble tea. But, I think we both knew the real reason we went was to yap without distractions.🧋🧋`

const LAST_DAY_MESSAGE = `The day we took this picture was probably one of the most bittersweet days in all of my life. 
It was really sad to see my best friend leave the place she helped me get settled into, but on the flip side it was great to see her finally have a chance
to spread her wings and fly out of here. Even now, I still miss our constant yapping during work hours and I always will.💬🏦`

function App() {

  const firstGalleryList = [{'imgSrc': 'partyUp.jpeg', 'scaleFactor': 0.5, 'cardBack': PARTY_UP_MESSAGE, 'topMargin': '2%', 'leftMargin': '2%'}, 
  {'imgSrc': 'covfefe.jpeg', 'scaleFactor': 0.35, 'cardBack': COVFEFE_MESSAGE, 'topMargin': '2%', 'leftMargin': '26.5%'}, 
  {'imgSrc': 'goofingOff.jpeg', 'scaleFactor': 0.55, 'cardBack': "", 'topMargin': '40%', 'leftMargin': '46%', 'isVideo': true, 'videoSrc': "goofingOff.mp4"}, 
  {'imgSrc': 'lastDay.jpeg', 'scaleFactor': 0.55, 'cardBack': LAST_DAY_MESSAGE, 'topMargin': '40%', 'leftMargin': '22%'}, 
  {'imgSrc': 'nomNom.jpeg', 'scaleFactor': 0.93, 'cardBack': INTRODUCTION_MESSAGE, 'topMargin': '2%', 'leftMargin': '63%', 'startFlipped': true}, 
  {'imgSrc': 'kingShit.jpg', 'scaleFactor': 0.4, 'cardBack': "", 'topMargin': '55%', leftMargin: '1.75%', 'isVideo': true, 'videoSrc':  "insideJoke.mp4"}]

  const secondGalleryList = [{'imgSrc': 'partyUp.jpeg', 'scaleFactor': 0.5, 'cardBack': PARTY_UP_MESSAGE, 'topMargin': '2%', 'leftMargin': '2%'}, 
  {'imgSrc': 'covfefe.jpeg', 'scaleFactor': 0.35, 'cardBack': COVFEFE_MESSAGE, 'topMargin': '2%', 'leftMargin': '26.5%'}, 
  {'imgSrc': 'goofingOff.jpeg', 'scaleFactor': 0.55, 'cardBack': "", 'topMargin': '40%', 'leftMargin': '46%', 'isVideo': true, 'videoSrc': "goofingOff.mp4"}, 
  {'imgSrc': 'lastDay.jpeg', 'scaleFactor': 0.55, 'cardBack': LAST_DAY_MESSAGE, 'topMargin': '40%', 'leftMargin': '22%'}, 
  {'imgSrc': 'unoShyAlwin.jpeg', 'scaleFactor': 0.93, 'cardBack': INTRODUCTION_MESSAGE, 'topMargin': '2%', 'leftMargin': '63%', 'startFlipped': true}, 
  {'imgSrc': 'unoBeachPizza.jpeg', 'scaleFactor': 0.4, 'cardBack': "", 'topMargin': '55%', leftMargin: '1.75%', 'isVideo': true, 'videoSrc':  "insideJoke.mp4"}]

  return (
    <div className="App">
      <header className="App-header">
            <GalleryRotater galleryInfoLists={[firstGalleryList, secondGalleryList]} />
      </header>
    </div>
  );
}

export default App;
