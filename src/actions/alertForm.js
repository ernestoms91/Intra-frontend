import { types } from "../types/types"

export const  uiOpenAlertaFormulario = ( alerta ) => ({
    type: types.uiOpenAlertaFormulario,
    payload: alerta
});

export const  uiCloseAlertaFormulario = (  ) => ({
    type: types.uiCloseAlertaFormulario
});