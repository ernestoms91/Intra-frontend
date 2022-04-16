import { fetchConToken, fetchSinToken } from "../helpers/fetch";
import { types } from "../types/types"
import {uiCloseAlertaFormulario, uiOpenAlertaFormulario  } from "./alertForm";



export const startLogin = (user, password) => {
  

    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth', { user, password }, 'POST' );

        const body = await resp.json();

        
        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name,
                rol: body.role
            }) )
            dispatch(uiCloseAlertaFormulario());
        } else {

            dispatch(uiOpenAlertaFormulario(body.msg))
        }
    
    }
}

const login = ( user ) => ({
    type: types.authLogin,
    payload: user
});


export const startChecking = () => {
    return async(dispatch) => {

        const resp = await fetchConToken( 'auth/renew' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );

            dispatch( login({
                uid: body.uid,
                name: body.name,
                rol: body.role
            }) )
        } else {
            dispatch( checkingFinish() );
        }
    }
}

const checkingFinish = () => ({ type: types.authCheckingFinish });