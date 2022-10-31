import {
        GET_WEATHER_REQUEST,
        GET_WEATHER_SUCCESS,
        URL
      } from "../constants/info";
import axios from 'axios';



export function getWeather(res) {


  return (dispatch) => {
    dispatch({
      type: GET_WEATHER_REQUEST
    })


   axios.get(URL)
      .then(
      	(res) =>{
      		return  dispatch({
            //создаем несколько payload что бы дотянуться до каждого объекта масссива res.data
	        	type: GET_WEATHER_SUCCESS,
            payloadElement: res.data,
            payloadMain: res.data.weather,
            payloadTemp: res.data.main
        	})

      	}
       
      )
  }
}

