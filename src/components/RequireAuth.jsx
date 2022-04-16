import { useSelector } from 'react-redux';
import { useLocation, Navigate, Outlet } from "react-router-dom";
import Spinner from './ui/Spinner';

const RequireAuth = ({ allowedRoles }) => {

    const { checking, uid, rol } = useSelector(state => state.auth)

    const location = useLocation();

    if ( checking ) {
        return <div>Esperate ...</div>
    }


    return (
        allowedRoles.includes(rol)
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    );
}

export default RequireAuth;