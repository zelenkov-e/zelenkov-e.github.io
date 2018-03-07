import { createReducer } from "redux-act";
import { getTrackList } from "../action/action";

export const initialState = [
  {
    id: 1,
    author: "Alexey Sonar – SkyTop Residency 037",
    imgURL:
      "http://cdn.promodj.com/afs/5156781896b24fe153957faca252dd1712:resize:220x366:same:d66445",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    Info: "h1"
  },
  {
    id: 2,
    author: "Fonarev - Digital Emotions # 490 ",
    imgURL:
      "http://cdn.promodj.com/afs/38bd0e7240304ca4eef5cfc6de60283411:resize:220x366:same:335735",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    Info: "h1"
  },
  {
    id: 3,
    author: "DENIS A - DAR Sessions Vol.44 ",
    imgURL:
      "https://ic.pics.livejournal.com/djdenis/13280338/1011166/1011166_600.jpg",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    Info: "h1"
  },
  {
    id: 4,
    author: "SVET - SPIRIT Fitness Podcast ",
    imgURL:
      "http://cdn.promodj.com/afs/f10dd7b697cf383dd9f4107d3a20ddbc12:resize:220x366:same:a00788",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    Info: "h1"
  }
];

export const reducerList = createReducer(function(on) {
  on(getTrackList, state => state);
}, initialState);
