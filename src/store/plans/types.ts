import { Plan } from '../../models/Plan';

export enum PlanTypes {
    PLAN_REQUEST = '@plan/PLAN_REQUEST',
    PLAN_SUCCESS = '@plan/PLAN_SUCCESS',
    PLAN_FAILURE = '@plan/PLAN_FAILURE',
}

export interface PlanState {
    readonly data: Plan[];
    readonly loading: boolean;
    readonly error: boolean;
}
