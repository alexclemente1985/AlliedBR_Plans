import { call, put } from 'redux-saga/effects';
import { planFailure, planSuccess } from './actions';
import api from '../../services/api';
import { PlanTypes } from './types';
import { PayloadAction } from 'typesafe-actions';
import Constants from '../../Constants';
import { PlanResponse } from '../../models/Plan';

export function* planRequest(action: PayloadAction<PlanTypes.PLAN_REQUEST, string>) {
    try {
        const { data } = yield call(api.get, `${Constants.PLANS}/${action.payload}`);
        yield put(planSuccess(data as PlanResponse));
    } catch (err) {
        yield put(planFailure());
    }
}
