import * as Yup from 'yup';
import { arrayValues } from './arrayValuesForFom';



const { estadocivil, roles, turnosBack, razas } = arrayValues;

const lowercaseRegex = /(?=.*[a-z])/;
const uppercaseRegex = /(?=.*[A-Z])/;
const numericRegex = /(?=.*[0-9])/;

export const UserSchema = (ciRegistrados = "", userRegistrados = "",
    emailRegistrados = "", siglaRegistradas = "") => {




    return Yup.object().shape({
        name: Yup.string()
            .required('El nombre es obligatorio')
            .min(2, 'El nombre es muy corto')
            .max(20, 'El nombre es muy largo')
        ,
        apellido1: Yup.string()
            .required('Los apellidos son obligatorios')
            .min(2, 'El apellido es muy corto')
            .max(20, 'El apellido es muy largo'),

        apellido2: Yup.string()
            .required('Los apellidos son obligatorios')
            .min(2, 'El apellido es muy corto')
            .max(20, 'El apellido es muy largo'),

        ci: Yup.string()
            .required('El número de carnet de identidad es obligatorio')
            .min(11, 'El número de carnet de identidad contiene 11 dígitos')
            .max(11, 'El número de carnet de identidad contiene 11 dígitos')
            .notOneOf(ciRegistrados, 'Este número ya se encuentra registrado'),

        direccion: Yup.string()
            .required('La dirección es obligatoria')
            .min(2, ' La dirección es muy corta')
            .max(80, 'La dirección es muy larga'),

        sigla: Yup.string()
            .uppercase()
            .notOneOf(siglaRegistradas, 'Estas siglas ya se encuentran en uso')
            .min(3, 'La sigla  al menos contiene 3 caracteres')
            .max(8, 'La sigla no puede exceder los 8 caracteres')
            .required('Las siglas son obligatorias'),



        estadoc: Yup.string()
            .oneOf(estadocivil, 'Debe seleccionar una opción')
            .required('Seleccione su estado civil'),

        raza: Yup.string()
            .oneOf(razas, 'Debe seleccionar una opción')
            .required('Seleccione la raza'),

        role: Yup.string()
            .oneOf(roles, 'Debe seleccionar un role de la lista')
            .required('Seleccione su rol'),

        turno: Yup.string()
            .oneOf(turnosBack, 'Debe seleccionar un turno válido')
            .required('Seleccione su turno'),

        telf: Yup.string()
            .required('El número de móvil  es obligatorio')
            .min(8, 'El número de móvil contiene 8 dígitos')
            .max(8, 'El número de móvil contiene 8 dígitos'),

        user: Yup.string()
            .required('El nombre de usuario es obligatorio')
            .min(2, 'El nombre de usuario al menos contiene 2 caracteres')
            .max(20, 'El nombre de usuario no puede exceder los 20 caracteres')
            .notOneOf(userRegistrados, 'Este nombre de usuario ya se encuentra registrado'),

        email: Yup.string()
            .lowercase()
            .email('Escriba un email válido')
            .notOneOf(emailRegistrados, 'Este email ya se encuentra registrado en el sistema')
            .required('Introduzca su email'),


        password1: Yup.string()
            .required('Introduzca una contraseña')
            .matches(lowercaseRegex, 'Debe contener al menos una minúscula')
            .matches(uppercaseRegex, 'Debe contener al menos una mayúscula')
            .matches(numericRegex, 'Debe contener al menos una número')
            .min(8, 'Debe contener al menos 8 caracteres'),

        password2: Yup.string()
            .required('Confirme su contraseña')
            .oneOf([Yup.ref('password1')], 'Las contraseñas no coinciden'),

    })
}