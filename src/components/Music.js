import React, { useState } from "react"
import ReactAudioPlayer from "react-audio-player"
import styled from "styled-components"

import SkipNextIcon from "@material-ui/icons/SkipNext"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"

// MUSIC
import ComingHome from "./../assets/ComingHome.mp3"
import DestroyMe from "./../assets/DestroyMe.mp3"
import Hypercolor from "./../assets/Hypercolor.mp3"
import Ludens from "./../assets/Ludens.mp3"
import GodsAndMonsters from "./../assets/GodsAndMonsters.mp3"
import Nightcall from "./../assets/Nightcall.mp3"
import ParasiteEve from "./../assets/ParasiteEve.mp3"
import TearDrops from "./../assets/Teardrops.mp3"
import Destiny from "./../assets/Destiny.mp3"
import Kingslayer from "./../assets/Kingslayer.mp3"
import NihilistBlues from "./../assets/NihilistBlues.mp3"
import ReturnToOz from "./../assets/ReturnToOz.mp3"

// PNGS
import DefaultPng from "./../assets/Default.png"
import ComingHomePng from "./../assets/ComingHome.png"
import DestroyMePng from "./../assets/DestroyMe.png"
import LudensPng from "./../assets/Ludens.png"
import HypercolorPng from "./../assets/Hypercolor.png"
import GodsAndMonstersPng from "./../assets/GodsAndMonsters.png"
import NightcallPng from "./../assets/Nightcall.png"
import DestinyPng from "./../assets/Destiny.png"
import NihilistBluesPng from "./../assets/NihilistBlues.png"
import ReturnToOzPng from "./../assets/ReturnToOz.png"

const Container = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 40%;
  height: 100%;
`

const SongPicture = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40%;
`

const SongInformation = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Controls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Next = styled(SkipNextIcon)`
  color: #fff;
  padding: 2%;
  :hover {
    color: #000;
  }
`

const Previous = styled(SkipPreviousIcon)`
  color: #fff;
  padding: 2%;
  :hover {
    color: #000;
  }
`

const Title = styled.h2`
  margin: 2px;
  color: #fff;
  text-shadow: 1px 1px #000;
`

const Artist = styled.h4`
  margin: 2px;
  margin-bottom: 10px;
  color: #fff;
  font-style: italic; 
  text-shadow: 1px 1px #000;
`

const Img = styled.img`
  width: 400px;
  height: 400px;
`

const Music = () => {
  const music = [
    ComingHome, DestroyMe, Hypercolor, Ludens,
    GodsAndMonsters, Nightcall, ParasiteEve,
    TearDrops, Destiny, Kingslayer, NihilistBlues,
    ReturnToOz
  ]

  const [playing, setPlaying] = useState(Math.floor(Math.random() * music.length))

  const musicInfo = {
    0: {
      "title": "Coming Home",
      "artist": "Peter Shilling",
      "img": ComingHomePng
    },
    1: {
      "title": "Destroy Me",
      "artist": "Mr. Kitty",
      "img": DestroyMePng
    },
    2: {
      "title": "Hypercolor",
      "artist": "CamelPhat, Yanis (ARTBAT Remix)",
      "img": HypercolorPng
    },
    3: {
      "title": "Ludens",
      "artist": "Bring Me The Horizon",
      "img": LudensPng 
    },
    4: {
      "title": "Gods and Monsters",
      "artist": "Lana Del Rey",
      "img": GodsAndMonstersPng
    },
    5: {
      "title": "Nightcall",
      "artist": "Kavinsky",
      "img": NightcallPng
    },
    6: {
      "title": "Parasite Eve",
      "artist": "Bring Me The Horizon",
      "img": LudensPng 
    },
    7: {
      "title": "Teardrops",
      "artist": "Bring Me The Horizon",
      "img": LudensPng 
    },
    8: {
      "title": "Destiny",
      "artist": "Generdyn Music (feat. Krigare)",
      "img": DestinyPng 
    },
    9: {
      "title": "Kingslayer",
      "artist": "Bring Me The Horizon",
      "img": LudensPng 
    },
    10: {
      "title": "Nihilist Blues",
      "artist": "Bring Me The Horizon",
      "img": NihilistBluesPng 
    },
    11: {
      "title": "Return To Oz",
      "artist": "Monolink (ARTBAT Remix)",
      "img": ReturnToOzPng 
    }
  }

  const handlePrevious = () => {
    if (playing - 1 < 0)
      setPlaying(music.length - 1)
    else
      setPlaying(prev => prev - 1)
  }

  const handleNext = () => setPlaying(prev => (prev + 1) % music.length)

  return (
    <Container>
      <SongPicture>
        <Img src={musicInfo[playing] ? musicInfo[playing].img : DefaultPng} />
      </SongPicture>
      <SongInformation>
        <Title>{ musicInfo[playing] ? musicInfo[playing].title : "" }</Title>
        <Artist>{ musicInfo[playing] ? musicInfo[playing].artist : "" }</Artist>
      </SongInformation>
      <Controls>
        <Previous fontSize="large" onClick={handlePrevious} />
        <ReactAudioPlayer
          src={music[playing]}
          autoPlay={true}
          onEnded={handleNext}
          controls
        />
        <Next fontSize="large" onClick={handleNext} />
      </Controls>
    </Container>
  )
}

export default Music
