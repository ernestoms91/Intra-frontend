import { types } from "../types/types";

const initialState = {
    msg: '',
    error: false
}



export const alertFormularioReducer = ( state = initialState, action ) => {

    switch ( action.type ) {
        case types.uiOpenAlertaFormulario:
            return {
                ...state,
                error: true,
                msg: action.payload
            }

        case types.uiCloseAlertaFormulario:
            return {
                ...state,
                msg:''
            }
    
        default:
            return state;
    }


}