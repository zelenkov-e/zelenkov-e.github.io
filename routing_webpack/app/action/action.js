import {
    GET_NEWS_REQUEST,
    GET_NEWS_SUCCESS,
    URL
  } from "../constants/infoConstants";
<<<<<<< HEAD
//   import axios from 'axios';
=======
  import axios from 'axios';
>>>>>>> 50ceb16f686fdeeca50732f995e8f40e7fb5911d


// track - выбранный эл списка 
// по клику на кот в деталях отображается подробн инфо
export default function setTrack(track){
    // alert(track.author)
    return{
        type: 'SET_TRACK',
        payload: track
    }
}


export function getNews() {

<<<<<<< HEAD
console.log('bye')
return{
    type: GET_NEWS_SUCCESS,
    payloadNews: 'bye'
}
    // return (dispatch) => {
    //   dispatch({
    //     type: GET_NEWS_REQUEST
    //   })
  
  
    //  axios.get(URL)
    //     .then(
    //         (res) =>{
    //             return  dispatch({
    //               type: GET_NEWS_SUCCESS,
    //               payloadNews: res.data
             
    //           })
  
    //         }
         
    //     )
    // }
=======
// console.log('bye')
// return{
//     type: GET_NEWS_SUCCESS,
//     payloadNews: 'bye'
// }
    return (dispatch) => {
      dispatch({
        type: GET_NEWS_REQUEST
      })
  
  
     axios.get(URL)
        .then(
            (res) =>{
                return  dispatch({
                  type: GET_NEWS_SUCCESS,
                  payloadNews: res.data.status
             
              })
  
            }
         
        )
    }
>>>>>>> 50ceb16f686fdeeca50732f995e8f40e7fb5911d
  }