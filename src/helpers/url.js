
const url = (role) =>{


    switch (role) {
        case 'ADMIN_ROLE':
          return  'administrador'

        case 'REDACTOR_ROLE':
          return  'redactor'

        case 'CORRECTOR_ROLE':
          return  'corrector'

        case 'JEFE_ROLE':
          return  'jturno'
      
      }
 }


export {
    url
}