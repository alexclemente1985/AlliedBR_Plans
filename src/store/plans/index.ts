import { Reducer } from 'redux';
import { PlanState, PlanTypes } from './types';

const INITIAL_STATE: PlanState = {
    data: [],
    loading: false,
    error: false,
};

const reducer: Reducer<PlanState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PlanTypes.PLAN_REQUEST:
            return { ...state, loading: true };
        case PlanTypes.PLAN_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload };
        case PlanTypes.PLAN_FAILURE:
            return { ...state, loading: false, error: true };
        default:
            return INITIAL_STATE;
    }
};

export default reducer;
