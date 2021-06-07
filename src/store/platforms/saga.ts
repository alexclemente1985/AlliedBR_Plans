import { call, put } from 'redux-saga/effects';
import Constants from '../../Constants';
import { platformsFailure, platformsSuccess } from './actions';
import api from '../../services/api';
import { PlatformRequest } from '../../models/Platform';

export function* platformRequest() {
    try {
        const { data } = yield call(api.get, Constants.PLATFORMS);
        yield put(platformsSuccess(data as PlatformRequest));
    } catch (err) {
        yield put(platformsFailure());
    }
}
