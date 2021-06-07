import { call, put } from 'redux-saga/effects';
import Constants from '../../Constants';
import { platformsFailure, platformsSuccess } from './actions';
import api from '../../services/api';
import { PlatformResponse } from '../../models/Platform';

export function* platformsRequest() {
    try {
        const { data } = yield call(api.get, Constants.PLATFORMS);
        yield put(platformsSuccess(data as PlatformResponse));
    } catch (err) {
        yield put(platformsFailure());
    }
}
