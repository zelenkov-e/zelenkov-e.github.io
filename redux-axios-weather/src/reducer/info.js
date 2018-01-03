import setWeatherAction from "../action/index";


// const initialState = {
// 		model: "Apple iPhone 8 256GB",
// 	}

// let weatherReduser = (state = initialState)=> state;



const initialState = {
  weather: ['HELLO WEATHER']
}


const weatherReduser = function(state = initialState, action) {
  switch(action.type) {
  case 'WEATHER_LIST_SUCCESS':
    return Object.assign({}, state, { weather: action.payload });
    // return {...state, weather: action.weather }
  
  }
  return state;
}



// const initialState = {
//   weather: []
// }


// const weatherReduser = (state = initialState, action)=> {
//   switch(action.type) {
//   case 'WEATHER_LIST_SUCCESS':
//     return Object.assign({}, state, { weather: action.payload });
//   }
//   return state;
// }


export default weatherReduser



