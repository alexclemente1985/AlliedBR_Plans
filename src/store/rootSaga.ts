import { all, takeLatest } from '@redux-saga/core/effects';
import { planRequest } from './plans/saga';
import { PlanTypes } from './plans/types';
import { platformsRequest } from './platforms/saga';
import { PlatformTypes } from './platforms/types';

export default function* rootSaga() {
    return yield all([
        takeLatest(PlatformTypes.PLATFORMS_REQUEST, platformsRequest),
        takeLatest(PlanTypes.PLAN_REQUEST, planRequest),
    ]);
}
