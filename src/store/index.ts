import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore, Store } from 'redux';
import { PlatformState } from './platforms/types';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';
import { PlanState } from './plans/types';

export interface ApplicationState {
    platforms: PlatformState;
    plans: PlanState;
}
const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
