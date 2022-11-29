import { combineReducers } from 'redux';
import intersReducer from './index';

const rootReducer = combineReducers({
  inters: intersReducer
});

export default rootReducer;
