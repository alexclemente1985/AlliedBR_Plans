import { Reducer } from 'redux';
import { PlatformState, PlatformTypes } from './types';

const INITIAL_STATE: PlatformState = {
    data: [],
    loading: false,
    error: false,
};

const reducer: Reducer<PlatformState> = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case PlatformTypes.PLATFORMS_REQUEST:
            return { ...state, loading: true };
        case PlatformTypes.PLATFORMS_SUCCESS:
            return { ...state, loading: false, error: false, data: action.payload };
        case PlatformTypes.PLATFORMS_FAILURE:
            return { ...state, loading: false, error: true };
        default:
            return INITIAL_STATE;
    }
};

export default reducer;
