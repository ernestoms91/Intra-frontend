import React from 'react'
import { useOutletContext } from 'react-router-dom';
import { fetchConToken, fetchSinToken } from '../../helpers/fetch';
import { useForm } from '../../hooks/useForm';
import Formulario from './Formulario';




const NuevoUsuario = () => {


  const [usuarios]= useOutletContext();




  return (
    <>
      <div className=' mx-auto h-full '>
        <p className="mt-3  text-3xl  text-center">Añadir nuevo usuario</p>


      </div>
     <Formulario>{'Añadir'}</Formulario>
    </>
  )
}

export default NuevoUsuario