import { combineReducers } from 'redux';
import platforms from './platforms';
import plans from './plans';

export default combineReducers({
    platforms,
    plans,
});
