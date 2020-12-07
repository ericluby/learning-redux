import { combineReducers } from 'redux';

import { donutsReducer } from '../modules/donuts'

let rootReducer = combineReducers({
  donutsReducer
});

export default rootReducer;
