import { createReducer } from "redux-act";
import { getTrackList } from "../action/action";

export const initialState = [
  {
    id: 1,
    author: "Alexey Sonar – SkyTop Residency 037",
    cost: 2519.0,
    imgURL:
      "http://cdn.promodj.com/afs/d9343adac287c6d06b86da9d482c9bfb12:crop:0x0:1080x1080:75x75:db68a3",
    audioURL: "http://promodj.com/embed/6540859/cover"
  },
  {
    id: 2,
    author: "Fonarev - Digital Emotions # 490 ",
    cost: 629.0,
    imgURL:
      "http://cdn.promodj.com/afs/6ebc774ef2c74efdd7927db157728b3e11:resize:75x75:fill:ffffff:f00130",
    audioURL: "http://promodj.com/embed/6548311/cover"
  },
  {
    id: 3,
    author: "DENIS A - DAR Sessions Vol.44 ",
    cost: 999.0,
    imgURL:
      "http://cdn.promodj.com/afs/0590c52a1fd3381a2303c21fb5044b0811:crop:160x0:640x640:75x75:1bfb87",
    audioURL: "http://promodj.com/embed/6548311/cover"
  },
  {
    id: 4,
    author: "Fabio Salvati - Euro Dance Mix ",
    cost: 399.9,
    imgURL:
      "http://cdn.promodj.com/afs/2ca82293d1221dc03524f4a932c7030611:crop:0x16:670x670:75x75:602a64",
    audioURL: "http://promodj.com/embed/6548311/cover"
  }
];

export const reducerList = createReducer(function(on) {
  on(getTrackList, state => state + 1);
}, initialState);
