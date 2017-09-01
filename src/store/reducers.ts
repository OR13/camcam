
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import {  combineReducers } from 'redux';

import {reducer as scanReducer} from './scan/reducer';
export default combineReducers({
   form: formReducer,
   scan: scanReducer,
   router: <any> routerReducer
});
