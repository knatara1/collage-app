import './App.css';
import PostcardImage from './PostcardImage';

const INTRODUCTION_MESSAGE = `Happy Birthday Emma!!!!🎉🎉🎉🎉🎉\n
From talking to you recently, I know you have been starting to lose a bit of your passion for technology and coding specifically. However, I think that you have too much potential to lose that passion so soon.\n 
So, to help show you how powerful code can be in the right hands, I made you this e-card with past memories 😊.\n
Each picture can be clicked to reveal a message and/or video and once you are done, just click anywhere on the background to go the next page. Have fun exploring all the surprises on this card!!\n
You can also flip back from text to the picture. For example if you flip this card over you will see a picture of us at Saravana Bhavan during Diwali.`

const PARTY_UP_MESSAGE = `I remember this day being the first time I met a lot of your friends outside of work including Yakov, Larry, Jen and Maya.\n
Also, remember this being the first time I got high so thank you for giving me the chance to try every 'being high' stereotype 😝.\n
PS: Check the tile below to see a funny video 👀`
function App() {
  return (
    <div className="App">
      <header className="App-header">
            <div className='galleryContainer'>
                <PostcardImage imagePath={require('./collage-images/partyUp.jpeg')} scaleFactor={0.5} cardBack={PARTY_UP_MESSAGE} topMargin={'2%'} leftMargin={'2%'} />
                <PostcardImage imagePath={require('./collage-images/covfefe.jpeg')} scaleFactor={0.35} cardBack={"Test"} topMargin={'2%'} leftMargin={'26.5%'}/>
                <PostcardImage imagePath={require('./collage-images/goofingOff.jpeg')} scaleFactor={0.55} cardBack={"Test"} topMargin={'40%'} leftMargin={'46%'}/>
                <PostcardImage imagePath={require('./collage-images/lastDay.jpeg')} scaleFactor={0.55} cardBack={"Test"} topMargin={'40%'} leftMargin={'22%'}/>
                <PostcardImage imagePath={require('./collage-images/nomNom.jpeg')} scaleFactor={0.93} cardBack={INTRODUCTION_MESSAGE} topMargin={'2%'} leftMargin={'63%'} startFlipped={true}/>
                <PostcardImage imagePath={require('./collage-images/kingShit.jpg')} scaleFactor={0.4} cardBack={"Test"} topMargin={'55%'} leftMargin={'1.75%'} isVideo={true}/>
            </div>
      </header>
    </div>
  );
}

export default App;
