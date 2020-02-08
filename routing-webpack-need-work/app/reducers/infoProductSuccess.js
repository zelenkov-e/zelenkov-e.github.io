import {
  GET_PRODUCT_REQUEST,
  GET_PRODUCT_SUCCESS
   
  } from "../constants/infoConstants";

  const initialState = {
    productSucsess:[]//нач состояние
  }

  const productReducerSuccess = function(state =initialState,action){
    switch(action.type) {
        case GET_PRODUCT_REQUEST:
          return state;
         
        
        case GET_PRODUCT_SUCCESS:
          return  Object.assign(
                {}, 
                state,
                //кон состояние - массив ajax 
                {productSucsess:action.payloadProductSucsess}
            );
         }
        return state;
      }

      
      export default productReducerSuccess