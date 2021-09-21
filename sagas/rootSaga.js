import {call,all } from 'redux-saga/effects';
import {watchFetchUsers} from './userSagas'

export default function* rootSaga(){
    yield call(watchFetchUsers)
}