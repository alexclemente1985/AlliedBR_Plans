import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore, Store } from 'redux';
import { PlatformState } from './platforms/types';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

export interface ApplicationState {
    platforms: PlatformState;
}
const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
