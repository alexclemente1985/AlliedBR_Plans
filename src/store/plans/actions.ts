import { action } from 'typesafe-actions';
import { PlanResponse } from '../../models/Plan';
import { PlanTypes } from './types';

export const planRequest = (id: string) => action(PlanTypes.PLAN_REQUEST, id);
export const planSuccess = (data: PlanResponse) => action(PlanTypes.PLAN_SUCCESS, data.planos);
export const planFailure = () => action(PlanTypes.PLAN_FAILURE);
