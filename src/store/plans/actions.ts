import { action } from 'typesafe-actions';
import { PlanRequest } from '../../models/Plan';
import { PlanTypes } from './types';

export const planRequest = () => action(PlanTypes.PLAN_REQUEST);
export const planSuccess = (data: PlanRequest) => action(PlanTypes.PLAN_SUCCESS, data.planos);
export const planFailure = () => action(PlanTypes.PLAN_FAILURE);
