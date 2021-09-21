import {
  ADD_USER,
  FETCH_USERS,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
} from '../actions/actionTypes';

const usersReducers = (users = [], action) => {
  switch (action.type) {
    case FETCH_SUCCEEDED:
      return action.receivedUsers;
    case FETCH_FAILED:
      return [];
    default:
      return users;
  }
};

export default usersReducers;
