import { combineReducers } from 'redux';
import { alertFormularioReducer } from './alertFormularioReducer';
import { authReducer } from './authReducer';


export const rootReducer = combineReducers({
    auth: authReducer,
    alert: alertFormularioReducer
    // TODO: AuthReducer
})

