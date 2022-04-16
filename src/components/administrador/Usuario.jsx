import React from 'react'

const Usuario = ({usuario}) => {

    const { turno, name, apellido1, apellido2, user, sigla, ci, email,status, role, } = usuario

  return (
    <tr className="border-b hover:bg-gray-50">
            <td className="p-3 text-black text-center">{turno}</td>
            <td className="p-3 text-black text-center">{name}</td>
            <td className="p-3 text-black text-center">{apellido1}</td>
            <td className="p-3 text-black text-center">{apellido2}</td>
            <td className="p-3 text-black text-center">{user}</td>
            <td className="p-3 text-black text-center">{sigla}</td>
            <td className="p-3 text-black text-center">{ci}</td>
            <td className="p-3 text-black text-center">{email}</td>

            { status ? (<td className="p-3 text-black  text-center">activo</td>) : (<td className="p-3 text-black bg-red-300 text-center">Disable</td>)}
            <td className="p-3 text-black text-center">{role}</td>

            <td className="p-3">

                <button 
                    type="button"
                    className="bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs"
                    onClick={() => navigate(`/clientes/${id}`)}
                >Ver</button>

                <button 
                    type="button"
                    className="bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
                    onClick={() => navigate(`/clientes/editar/${id}`)}
                >Editar</button>

                <button 
                    type="button"
                    className="bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-3"
                    onClick={() => handleEliminar(id)}
                >Eliminar</button>
            </td>
        </tr>
  )
}

export default Usuario