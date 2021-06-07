import { call, put } from 'redux-saga/effects';
import Constants from '../../Constants';
import { planFailure, planSuccess } from './actions';
import api from '../../services/api';
import { PlanRequest } from '../../models/Plan';

export function* planRequest() {
    try {
        const { data } = yield call(api.get, Constants.PLATFORMS);
        yield put(planSuccess(data as PlanRequest));
    } catch (err) {
        yield put(planFailure());
    }
}
