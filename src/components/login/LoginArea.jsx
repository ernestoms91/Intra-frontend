
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { uiOpenAlertaFormulario } from '../../actions/alertForm';
import { startLogin } from '../../actions/auth';

import { useForm } from "../../hooks/useForm";
import AlertaFormulario from '../AlertaFormulario';

const LoginArea = () => {

  const dispatch = useDispatch();

  const alerta = useSelector(state => state.alert)

  

  const [formLoginValues, handleLoginInputChange] = useForm({
    user: '',
    password: ''
  });

  const { user, password } = formLoginValues;


  const  handleLogin =  e => {
    e.preventDefault();
    if ([user, password].includes('')) {
      dispatch(uiOpenAlertaFormulario('Todos los campos son obligatorios'))
      return
    }
   dispatch(startLogin(user, password))

  }

  const { msg } = alerta;

  return (
  
      (<div className='md:w-1/2 lg:2/5 '>
      <h2 className='font-black text-3xl text-center text-red-800'>Login</h2>
      {msg && <AlertaFormulario alerta={alerta} />}
      <form
        className='bg-white shadow rounded-lg p-10 '
        onSubmit={handleLogin}
      >

        <div className='my-5'>
          <label
            className='uppercase text-gray-600 block text-xl  font-bold'
            htmlFor='user'
          >Usuario</label>
          <input
            id='user'
            type="text"
            placeholder='Introduzca su usuario'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={user}
            name="user"
            onChange={handleLoginInputChange}
          />
        </div>

        <div className='my-5'>
          <label
            className='uppercase text-gray-600 block text-xl  font-bold'
            htmlFor='password'
          >Contraseña</label>
          <input
            id='password'
            type="password"
            placeholder='Introduzca su contraseña'
            className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
            value={password}
            name="password"
            onChange={handleLoginInputChange}
          />
        </div>

        <input
          type="submit"
          value="Iniciar Sesión"
          className='bg-red-800 w-full py-3 text-white uppercase font-bold 
        rounded-xl hover:cursor-pointer hover:bg-red-900 transition-colors'
        />

      </form>
    </div>)



  )
}

export default LoginArea