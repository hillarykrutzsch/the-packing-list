import { combineReducers } from 'redux';
import weatherReducer from './weatherReducer';
import appViewReducer from './appViewReducer';

export default combineReducers({
    weatherData: weatherReducer,
    appView: appViewReducer
});