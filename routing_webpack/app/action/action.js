import {
  GET_NEWS_REQUEST,
  GET_NEWS_SUCCESS,
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_SUCCESSFULL,
  sportURL,
  newsURL
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
              },
              {
                type: GET_PRODUCT_SUCCESSFULL,
                payloadProductSucsess: res.data
              }

              )
  
            }
         
        )
    }
  }