import {
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_MUSIC_REQUEST,
  GET_MUSIC_SUCCESS,
  sportURL,
  newsURL,
  musicURL
  } from "../constants/infoConstants";

  import axios from 'axios';


// track - выбранный эл списка 
// по клику на кот в деталях отображается подробн инфо
export default function setTrack(track){
    return{
        type: 'SET_TRACK',
        payload: track
    }
}


export function getNews() {

    return (dispatch) => {
      dispatch({
        type: GET_NEWS_REQUEST
      })
  
  
     axios.get(newsURL)
        .then(
            (res) =>{
                return  dispatch({
                  type: GET_NEWS_SUCCESS,
                  payloadNews: res.data.articles
                  // payloadNews: res.data
             
              })
  
            }
         
        )
    }
  }

  export function getProducts() {

  //   return{
  //     type: 'GET_PRODUCT_SUCCESS',
  //     payloadProduct: 'bye'
  // }

    return (dispatch) => {
      dispatch({
        type: GET_PRODUCT_REQUEST
      })
  
  
     axios.get(sportURL)
        .then(
            (res) =>{
                return  dispatch({
                  type: GET_PRODUCT_SUCCESS,
                  payloadProduct: res.data
               })
  
            }
         
        )
    }
  }

  export function getMusic() {
  
    return (dispatch) => {
      dispatch({
        type: GET_MUSIC_REQUEST
      })
  
     axios.get(musicURL)
        .then(
            (res) =>{
                return  dispatch({
                  type: GET_MUSIC_SUCCESS,
                  payloadtMusic: res.data.tracks
               })
  
            }
         
        )
    }
  }

