import { createReducer } from "redux-act";
import { getTrackList } from "../action/action";

export const initialState = [
  {
    id: 1,
    author: "Alexey Sonar – SkyTop Residency 037",
    imgURL:
      "http://cdn.promodj.com/afs/5156781896b24fe153957faca252dd1712:resize:220x366:same:d66445",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    Info:
      "Alexey Sonar – один из самых идейных и активных представителей российской клубной индустрии: диджей, продюсер, совладелец и управляющий лейбла Intricate Records. На протяжении десяти лет был бессменным ведущим радиопрограммы Asphalt, которая транслировалась в интернете и на FM-радиостанциях в нескольких странах мира. На данный момент ведет свое радиошоу SkyTop Residency, а не так давно запустил одноименный лейбл SkyTop."
  },
  {
    id: 2,
    author: "Fonarev - Digital Emotions # 490 ",
    imgURL:
      "http://cdn.promodj.com/afs/38bd0e7240304ca4eef5cfc6de60283411:resize:220x366:same:335735",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    Info:
      "Джедай! Легенда Российской электронной сцены.Его выступления это истинное путешествие в мир музыки. В них сочетаются и переплетаются - этника, драйв, эмоциональность и артистичность. На протяжении многих лет является одним из самых авторитетных ди-джеев России.Любимые направления в музыке - Progressive,Trance & Breaks."
  },
  {
    id: 3,
    author: "DENIS A - DAR Sessions Vol.44 ",
    imgURL:
      "https://ic.pics.livejournal.com/djdenis/13280338/1011166/1011166_600.jpg",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    Info:
      "DENIS A ( BEDROCK, Ministry of Sound, DAR). Музыкальный директор и резидент SPACE MOSCOW, владелец лэйбла DAR. Основатель направления HYPNOTERIC"
  },
  {
    id: 4,
    author: "SVET - SPIRIT Fitness Podcast ",
    imgURL:
      "http://cdn.promodj.com/afs/f10dd7b697cf383dd9f4107d3a20ddbc12:resize:220x366:same:a00788",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    Info:
      "SVET ди-джей и саунд-продюсер с более, чем пятнадцатилетним стажем. Резидент радиостанции Megapolis FM. Официальный DJ Зимних Олимпийских Игр в Сочи. Победитель битвы ди-джеев от журнала «DJMAG». Победитель конкурса на лучший трек BURN DJ. Сертифицированный специалист в области саунд продакшена. Владелец лейбла EXTRA SOUND.."
  },
  {
    id: 5,
    author: "Alexey Sonar – SkyTop Residency 037",
    imgURL:
      "http://cdn.promodj.com/afs/5156781896b24fe153957faca252dd1712:resize:220x366:same:d66445",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    Info:
      "Alexey Sonar – один из самых идейных и активных представителей российской клубной индустрии: диджей, продюсер, совладелец и управляющий лейбла Intricate Records. На протяжении десяти лет был бессменным ведущим радиопрограммы Asphalt, которая транслировалась в интернете и на FM-радиостанциях в нескольких странах мира. На данный момент ведет свое радиошоу SkyTop Residency, а не так давно запустил одноименный лейбл SkyTop."
  },
  {
    id: 6,
    author: "Fonarev - Digital Emotions # 490 ",
    imgURL:
      "http://cdn.promodj.com/afs/38bd0e7240304ca4eef5cfc6de60283411:resize:220x366:same:335735",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    Info:
      "Джедай! Легенда Российской электронной сцены.Его выступления это истинное путешествие в мир музыки. В них сочетаются и переплетаются - этника, драйв, эмоциональность и артистичность. На протяжении многих лет является одним из самых авторитетных ди-джеев России.Любимые направления в музыке - Progressive,Trance & Breaks."
  },
  {
    id: 7,
    author: "DENIS A - DAR Sessions Vol.44 ",
    imgURL:
      "https://ic.pics.livejournal.com/djdenis/13280338/1011166/1011166_600.jpg",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    Info:
      "DENIS A ( BEDROCK, Ministry of Sound, DAR). Музыкальный директор и резидент SPACE MOSCOW, владелец лэйбла DAR. Основатель направления HYPNOTERIC"
  },
  {
    id: 8,
    author: "SVET - SPIRIT Fitness Podcast ",
    imgURL:
      "http://cdn.promodj.com/afs/f10dd7b697cf383dd9f4107d3a20ddbc12:resize:220x366:same:a00788",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    Info:
      "SVET ди-джей и саунд-продюсер с более, чем пятнадцатилетним стажем. Резидент радиостанции Megapolis FM. Официальный DJ Зимних Олимпийских Игр в Сочи. Победитель битвы ди-джеев от журнала «DJMAG». Победитель конкурса на лучший трек BURN DJ. Сертифицированный специалист в области саунд продакшена. Владелец лейбла EXTRA SOUND.."
  },
  {
    id: 9,
    author: "Alexey Sonar – SkyTop Residency 037",
    imgURL:
      "http://cdn.promodj.com/afs/5156781896b24fe153957faca252dd1712:resize:220x366:same:d66445",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    Info:
      "Alexey Sonar – один из самых идейных и активных представителей российской клубной индустрии: диджей, продюсер, совладелец и управляющий лейбла Intricate Records. На протяжении десяти лет был бессменным ведущим радиопрограммы Asphalt, которая транслировалась в интернете и на FM-радиостанциях в нескольких странах мира. На данный момент ведет свое радиошоу SkyTop Residency, а не так давно запустил одноименный лейбл SkyTop."
  },
  {
    id: 10,
    author: "Fonarev - Digital Emotions # 490 ",
    imgURL:
      "http://cdn.promodj.com/afs/38bd0e7240304ca4eef5cfc6de60283411:resize:220x366:same:335735",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    Info:
      "Джедай! Легенда Российской электронной сцены.Его выступления это истинное путешествие в мир музыки. В них сочетаются и переплетаются - этника, драйв, эмоциональность и артистичность. На протяжении многих лет является одним из самых авторитетных ди-джеев России.Любимые направления в музыке - Progressive,Trance & Breaks."
  },
  {
    id: 11,
    author: "DENIS A - DAR Sessions Vol.44 ",
    imgURL:
      "https://ic.pics.livejournal.com/djdenis/13280338/1011166/1011166_600.jpg",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    Info:
      "DENIS A ( BEDROCK, Ministry of Sound, DAR). Музыкальный директор и резидент SPACE MOSCOW, владелец лэйбла DAR. Основатель направления HYPNOTERIC"
  },
  {
    id: 12,
    author: "SVET - SPIRIT Fitness Podcast ",
    imgURL:
      "http://cdn.promodj.com/afs/f10dd7b697cf383dd9f4107d3a20ddbc12:resize:220x366:same:a00788",
    audioURL: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
    Info:
      "SVET ди-джей и саунд-продюсер с более, чем пятнадцатилетним стажем. Резидент радиостанции Megapolis FM. Официальный DJ Зимних Олимпийских Игр в Сочи. Победитель битвы ди-джеев от журнала «DJMAG». Победитель конкурса на лучший трек BURN DJ. Сертифицированный специалист в области саунд продакшена. Владелец лейбла EXTRA SOUND.."
  }
];

export const reducerList = createReducer(function(on) {
  on(getTrackList, state => state);
}, initialState);
