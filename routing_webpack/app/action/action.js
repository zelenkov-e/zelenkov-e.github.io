import {
    GET_NEWS_REQUEST,
    GET_NEWS_SUCCESS,
    URL
  } from "../constants/infoConstants";
  import axios from 'axios';


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

    return (dispatch) => {
      dispatch({
        type: GET_NEWS_REQUEST
      })
  
  
     axios.get(URL)
        .then(
            (res) =>{
                return  dispatch({
                  type: GET_NEWS_SUCCESS,
                  payloadMain: res.data.articles
                // payloadMain: [
                //     {
                //         "id":804,
                //         "main":"fog",
                //         "description":"overcast clouds",
                //         "icon":"04d"
                //     },
               
                //     {
                //         "id":805,
                //         "main":"Clouds",
                //         "description":"overcast clouds",
                //         "icon":"04d"
                //     }
                // ]
                
             
              })
  
            }
         
        )
    }
  }