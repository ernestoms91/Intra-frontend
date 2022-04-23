
import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom"
import AdministrarUsuarios from "../components/administrador/AdministrarUsuarios"
import NuevoUsuario from "../components/administrador/NuevoUsuario"
import { fetchConToken } from "../helpers/fetch";


const Administrador = () => {

  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
      const obtenerusuariossAPI = async () => {
          try {
              const resp = await fetchConToken('auth/usuarios');
              const body = await resp.json();

              setUsuarios(body);

          } catch (error) {
              console.log(error)
          }
      }
      obtenerusuariossAPI()

  }, [])



  return (
    <>
      <Outlet context={[usuarios, setUsuarios]}/>
      
    </>
  )
}

export default Administrador