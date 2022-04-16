import { Outlet } from "react-router-dom"
import Navbar3 from "./Navbar3"



const Layout = () => {
    return (
        <>
        <Navbar3/>
        <Outlet />
        </>

    )
}

export default Layout
