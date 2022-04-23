
import { Routes, Route, Navigate } from 'react-router-dom';
import RequireAuth from './components/RequireAuth';
import { useDispatch, useSelector } from 'react-redux';
import Administrador from './pages/Administrador';
import Cabina from './pages/Cabina';
import Login from './pages/Login'
import Redactor from './pages/Redactor';
import { useEffect } from 'react';
import { startChecking } from './actions/auth';
import Layout from './components/ui/Layout';
import NuevoUsuario from './components/administrador/NuevoUsuario';
import AdministrarUsuarios from './components/administrador/AdministrarUsuarios';
import VerUsuario from './components/administrador/VerUsuario';
import EditarUsuario from './components/administrador/EditarUsuario';




const roles = [
  'ADMIN_ROLE', 'REDACTOR_ROLE', 'CORRECTOR_ROLE', 'JEFE_ROLE', 'JEFE_REV_ROLE', 'REVISTA_ROLE', 'ANALISTA_ROLE'
]

function App() {

  const dispatch = useDispatch();
  useEffect(() => {

    dispatch(startChecking());

  }, [dispatch])


  return (
    <Routes>

      <Route path="login" element={<Login />} />

      <Route path="/" element={<Layout />}> 

      <Route element={<RequireAuth allowedRoles={[roles[0]]} />}>       
      <Route path="/administrador/*" element={<Administrador />} >
      <Route path="gestionar" element={<AdministrarUsuarios />} />
      <Route path="nuevo" element={<NuevoUsuario />} />
      <Route path="ver/:id" element={<VerUsuario/>} />
      <Route path="editar/:id" element={<EditarUsuario/>} />
      </Route>
      </Route>
      
      <Route element={<RequireAuth allowedRoles={[roles[1]]} />}>
      <Route path="redactor" element={<Redactor />} />
      </Route>
      </Route> 


    </Routes>
  )
}

export default App


{/* 
<Route path="cabina" element={<Cabina />} />

 */}
