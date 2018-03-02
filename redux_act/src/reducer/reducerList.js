import { createReducer } from "redux-act";
import { getTrackList } from "../action/action";

export const initialState = [
  {
    id: 1,
    author: "Alexey Sonar – SkyTop Residency 037",
    cost: 2519.0,
    imgURL:
      "http://cdn.promodj.com/afs/5156781896b24fe153957faca252dd1712:resize:220x366:same:d66445",
    audioURL: "http://promodj.com/embed/6540859/cover"
  },
  {
    id: 2,
    author: "Fonarev - Digital Emotions # 490 ",
    cost: 629.0,
    imgURL:
      "http://cdn.promodj.com/afs/38bd0e7240304ca4eef5cfc6de60283411:resize:220x366:same:335735",
    audioURL: "http://promodj.com/embed/6548311/cover"
  },
  {
    id: 3,
    author: "DENIS A - DAR Sessions Vol.44 ",
    cost: 999.0,
    imgURL:
      "https://ic.pics.livejournal.com/djdenis/13280338/1011166/1011166_600.jpg",
    audioURL: "http://promodj.com/embed/6548311/cover"
  },
  {
    id: 4,
    author: "Fabio Salvati - Euro Dance Mix ",
    cost: 399.9,
    imgURL:
      "http://cdn.promodj.com/afs/9ae1b2dd997f4f117dc4a72fac66fc3e11:resize:220x366:same:d93188",
    audioURL: "http://promodj.com/embed/6548311/cover"
  }
];

export const reducerList = createReducer(function(on) {
  on(getTrackList, state => state);
}, initialState);
