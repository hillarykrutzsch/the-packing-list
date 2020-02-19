import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import appViewReducer from './appViewReducer';
import tripLocationReducer from './tripLocationReducer';

export default combineReducers({
    weatherData: weatherReducer,
    appView: appViewReducer,
    tripLocation: tripLocationReducer
});