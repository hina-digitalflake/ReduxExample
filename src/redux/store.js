import { applyMiddleware, combineReducers, createStore } from "redux";
import CountReducers from "./reducers/countReducers";


const rootReducer  = combineReducers({
  count : CountReducers
})

const logging = (store) => {
  return (next) => {
    return (action) => {
      console.log( "[inside logging],  action = ", action );
      console.log( "[inside logging],  State before next = ", store.getState() );
      const result = next( action );
      console.log( "[logging], store value after next", store.getState() );
      return result;
    }
  }
}
// export const store = createStore(rootReducer, applyMiddleware(logging))

export const store = createStore(rootReducer)