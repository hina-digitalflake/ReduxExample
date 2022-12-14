import {INCREMENT,DECREMENT} from '../ActionConstants'

export const increment = () => {
  return{
    type : INCREMENT
  }
}

export const decrement = () => {
  return{
    type : DECREMENT
  }
}