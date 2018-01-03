// action creater
 // export const selectWeather = (response) =>{

let WEATHER_LIST_SUCCESS = 'WEATHER_LIST_SUCCESS'

 export default function setWeatherAction(res) {
 	
 	return{
 		type:"WEATHER_LIST_SUCCESS",
 		// payload:response.data.name
 		payload:res.data
 	}
 }




// export const action = {
 	
 	
//  		type:"WEATHER_LIST_SUCCESS",
//  		weather:response.data
 	
//  }