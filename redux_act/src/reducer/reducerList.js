import { createReducer } from "redux-act";
import { getMusicList } from "../action/action";
import{GET_MUSIC_SUCCESS} from "../selectors/selectors"

const initialState = {
  music: []
};

// export const reducerList = createReducer({}, initialState);

// reducerList.on(getMusicList, (state, payload) =>
//   // console.log(payload.tracks),
//   ({
//     ...state,
//     music: payload.tracks
//   })
// );
export const reducerList  = function(state =initialState,action){
  switch(action.type) {
       
      
      case GET_MUSIC_SUCCESS:
        return  Object.assign(
              {}, 
              state,
              //кон состояние - массив ajax 
              {music:action.payload.tracks}
          );
       }
      //  console.log(action.payload)
      return state;
    }

   