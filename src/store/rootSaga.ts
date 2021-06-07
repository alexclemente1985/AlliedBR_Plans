import { all, takeLatest } from '@redux-saga/core/effects';
import { platformRequest } from './platforms/saga';
import { PlatformTypes } from './platforms/types';

export default function* rootSaga() {
    return yield all([takeLatest(PlatformTypes.PLATFORMS_REQUEST, platformRequest)]);
}
