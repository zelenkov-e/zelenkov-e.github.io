import {
    GET_PRODUCT_REQUEST,
    GET_PRODUCT_SUCCESS
   
  } from "../constants/infoConstants";

  const initialState = {
    productArticles:[]//нач состояние
  }

  const productReducer = function(state =initialState,action){
    switch(action.type) {
        case GET_PRODUCT_REQUEST:
          return state;
         
        
        case GET_PRODUCT_SUCCESS:
          return  Object.assign(
                {}, 
                state,
                //кон состояние - массив ajax 
                {productArticles:action.payloadProduct.articles}
            );
         }
        return state;
      }

      
      export default productReducer