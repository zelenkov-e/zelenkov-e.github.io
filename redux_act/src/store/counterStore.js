import { createStore } from "redux";
import { rootReducer } from "../reducer/combineReducer";
import { applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk"; //<-- добавили redux-thunk

function configureStore(initialState) {
  const logger = createLogger();
  const store = createStore(
    rootReducer,
    initialState,
    //добавили в applyMiddleware(createLogger())
    applyMiddleware(thunk, logger)
  ); // <-- добавили его в цепочку перед logger'ом
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
  return store;
}

export const counterStore = configureStore();

// export const counterStore = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );
