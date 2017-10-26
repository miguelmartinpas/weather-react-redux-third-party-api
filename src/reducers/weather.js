import { FETCH_WEATHER } from '../actions';

const weather = (state = [], action) => {
  switch(action.type) {
    case FETCH_WEATHER:
      return [ ...state, action.payload.data ];
  }
  return state;
}

export default weather;
