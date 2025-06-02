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

const SIMGE_MESSAGE = `"Happy birthday Emma miss you and love you! Can't wait to laugh out loud as possible and annoy people again 🤪🥰❤️ #277dayz" - Simge \n
I couldn't get any messages from anyone else, so instead I'll just put in random quotes from the group chat 🤣`

const SEXY_ALWIN_MESSAGE = `"Smh all my pics with Emma are on her deleted instagram" - Alwin\n
But, im sure he still hopes you have a good birthday!! ☺️`

const BRACELETS_MESSAGE = `This was the day your infamous Stanley Cup + Bracelet combo started. If anyone was hanging out with you at the time, it was almost impossible for them to not hear about it. 🩷🥤`

const OOC_QUOTE = `"They say if u put ur spit in ur belly it helps" - Sukhnandan\n
I remember you pinning this quote and I remember the context, but it's funnier to leave it as is.🙃`

const BEACH_DAY_MESSAGE = `When I asked for pictures from everyone, multiple people (Simge, Alwin and Catherine) all brought up beach day.\n 
So, I am glad I was able to get multiple pictures from it because it must have been memorable! 🏖️🍕`

const VOLLEYBALL_MESSAGE = `A cute reminder that everyone in this picture is thinking about you on your special day. And, so is the photographer, I heard he's a pretty cool guy too. 😝`

const MAYA_MESSAGE = `Maya didn't send me a quote but she sent me a bunch of pictures. I think she wanted to save everything she had for her surprise present so I won't say much. 😏\n
One thing I do know is she definitely did want to wish you HAPPY BIRTHDAY!!!`

const LAWRENCE_MESSAGE = `Happy birthday T!!!! Wishing you a year filled with great health, hapiness, wealth, love and success until 120 years.
May you receive all of your heart's desires that are good for you. You are a greate friend who is always kind, thoughtful, 
and hilarious. Very thankful for our friendship and can't wait to celebrate when we're all together again!!!`

const JEN_MESSAGE = `Tiki,
Happy birthday!!!!\n
May this year be full of only simchas and blessings! I can't wait to continue to watch you shine! You are such a special person and I love you forever!! May all of your birthday wishes come true (and more). I love you so much. Can't wait to celebrate!!!\n
Love,
Jen`

function App() {

  const firstGalleryList = [{'imgSrc': 'partyUp.jpeg', 'scaleFactor': 0.5, 'cardBack': PARTY_UP_MESSAGE, 'topMargin': '2%', 'leftMargin': '2%'}, 
  {'imgSrc': 'covfefe.jpeg', 'scaleFactor': 0.35, 'cardBack': COVFEFE_MESSAGE, 'topMargin': '2%', 'leftMargin': '26.5%'}, 
  {'imgSrc': 'goofingOff.jpeg', 'scaleFactor': 0.55, 'cardBack': "", 'topMargin': '40%', 'leftMargin': '46%', 'isVideo': true, 'videoSrc': "goofingOff.mp4"}, 
  {'imgSrc': 'lastDay.jpeg', 'scaleFactor': 0.55, 'cardBack': LAST_DAY_MESSAGE, 'topMargin': '40%', 'leftMargin': '22%'}, 
  {'imgSrc': 'nomNom.jpeg', 'scaleFactor': 0.93, 'cardBack': INTRODUCTION_MESSAGE, 'topMargin': '2%', 'leftMargin': '63%', 'startFlipped': true}, 
  {'imgSrc': 'kingShit.jpg', 'scaleFactor': 0.4, 'cardBack': "", 'topMargin': '55%', leftMargin: '1.75%', 'isVideo': true, 'videoSrc':  "insideJoke.mp4"}]

  const secondGalleryList = [{'imgSrc': 'unoBeachPizza.jpeg', 'scaleFactor': 0.48, 'cardBack': BEACH_DAY_MESSAGE, 'topMargin': '2%', 'leftMargin': '75%'}, 
  {'imgSrc': 'unoBracelets.jpeg', 'scaleFactor': 0.48, 'cardBack': BRACELETS_MESSAGE, 'topMargin': '2%', 'leftMargin': '36%'}, 
  {'imgSrc': 'unoDynamicDuo.jpeg', 'scaleFactor': 0.9, 'cardBack': SIMGE_MESSAGE, 'topMargin': '2%', 'leftMargin': '2%', 'startFlipped': true}, 
  {'imgSrc': 'unoSexyAlwin.jpeg', 'scaleFactor': 0.4, 'cardBack': SEXY_ALWIN_MESSAGE, 'topMargin': '52%', 'leftMargin': '33%'}, 
  {'imgSrc': 'unoShyAlwin.jpeg', 'scaleFactor': 0.4, 'cardBack': OOC_QUOTE, 'topMargin': '52%', 'leftMargin': '58%'}, 
  {'imgSrc': 'unoVolleyball.jpeg', 'scaleFactor': 0.4, 'cardBack': VOLLEYBALL_MESSAGE, 'topMargin': '52%', leftMargin: '82%'}]

    const thirdGalleryList = [{'imgSrc': 'jenPic.jpeg', 'scaleFactor': 0.75, 'cardBack': JEN_MESSAGE, 'topMargin': '15%', 'leftMargin': '73.5%'}, 
  {'imgSrc': 'lawrencePic.jpeg', 'scaleFactor': 0.75, 'cardBack': LAWRENCE_MESSAGE, 'topMargin': '15%', 'leftMargin': '35%'}, 
  {'imgSrc': 'mayaPic.jpg', 'scaleFactor': 0.75, 'cardBack': MAYA_MESSAGE, 'topMargin': '15%', 'leftMargin': '2%', 'startFlipped': true}]

  return (
    <div className="App">
      <header className="App-header">
            <GalleryRotater galleryInfoLists={[firstGalleryList, secondGalleryList, thirdGalleryList]} />
      </header>
    </div>
  );
}

export default App;
