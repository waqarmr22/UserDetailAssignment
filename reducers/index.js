import {combineReducers} from 'redux';
import usersReducer from './usersReducers';

const allReducers = combineReducers({
  usersReducer,
});
export default allReducers;
