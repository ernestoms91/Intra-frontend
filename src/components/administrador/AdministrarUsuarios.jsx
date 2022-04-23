import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { fetchConToken } from '../../helpers/fetch';
import Usuario from './Usuario';


const AdministrarUsuarios = () => {

const [usuarios, setUsuarios]= useOutletContext();
    const navigate = useNavigate();
    const location = useLocation();





    const  handleAddUser =  e => {
        e.preventDefault();
        navigate(location.pathname.split('/').slice(0,-1).join('/') + '/nuevo')
    }



    return (
        <>
            <div className=' mx-auto h-full '>
                <h1 className="font-black  mt-2 text-center text-6xl text-red-00">Usuarios</h1>
                <p className="mt-3  text-2xl text-red-800 text-center">Administra tus usuarioss</p>

                <button className=' mx-auto mt-2 flex bg-transparent bg-blue-300 hover:bg-blue-500 
                text-blue-700 font-semibold hover:text-white py-2 px-4 border 
                border-blue-500 hover:border-transparent rounded'
                onClick={handleAddUser }
                >
                    Añadir usuario
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>

                </button>


            </div>
            <div className='w-full  '>
            <div className="bg-red-800 mt-3 "></div>
                <table className="w-full   table-auto shadow bg-white overflow-x-scroll">
                    <thead className="bg-red-800 text-white">
                        <tr>
                            <th className="p-2">Turno</th>
                            <th className="p-2">Nombre</th>
                            <th className="p-2">1 Apellido</th>
                            <th className="p-2">2 Apellido</th>
                            <th className="p-2">Usuario</th>
                            <th className="p-2">Sigla</th>
                            <th className="p-2 ">CI</th>
                            <th className="p-2">Email</th>
                            <th className="p-2">Status</th>
                            <th className="p-2">Rol</th>
                            <th className="p-2">Acciones</th>
                        </tr>
                    </thead>

                    <tbody>
                    { usuarios.map( usuario => (

                        < Usuario
                        
                            key={usuario.uid}
                            usuario={usuario}
                            // handleEliminar={handleEliminar}
                        />

                    ))}
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default AdministrarUsuarios