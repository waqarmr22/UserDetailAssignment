import {
    FETCH_USERS,
    FETCH_SUCCEEDED,
    FETCH_FAILED,
  } from '../actions/actionTypes';
  import {put,takeLatest} from 'redux-saga/effects';
  import {Api} from './Api'

  function* fetchUsers(){
      try{
      const receivedUsers=yield  Api.getUsersFromApi()
      yield put({type:FETCH_SUCCEEDED,receivedUsers:receivedUsers})
      }catch(error){
        yield put({type:FETCH_FAILED,error})
      }
  }
  export function* watchFetchUsers(){
      yield takeLatest(FETCH_USERS,fetchUsers)
  }