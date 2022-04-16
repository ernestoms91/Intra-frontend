import { useState } from "react";
import { NavLink } from "react-router-dom";
import  Logo  from './logo.png';


const Navbar3 = () => {

    const [active, setActive] = useState(false);

    const handleActive = (e) => {
        e.preventDefault();
        setActive(!active);
    }

    return (

        <nav className="p-5 bg-white shadow md:flex md:items-center  w-full sticky md:justify-between">

            <div className="flex justify-between">
            <img  className="h-10" src={Logo} />
                {/* <span className="text-2xl font-[Poppins] cursor-pointer">Radio Reloj</span> */}
                <button className="md:hidden" 
                onClick={handleActive}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>


            <ul className={`md:flex md:items-center z-[-1] md:z-auto md:static  
            bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 opacity-100 
                top-[-400px] transition-all ease-in duration-500 ${active ? "" : "hidden" }`}>
                <li className="mx-4 my-6 md:my-0">
                    <NavLink className="text-xl hover:text-cyan-500 duration-500 " to ="#">Usuarios</NavLink>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <NavLink className="text-xl hover:text-cyan-500 duration-500 " to ="#">Eventos</NavLink>
                </li>
                <li className="mx-4 my-6 md:my-0">
                    <NavLink className="text-xl hover:text-cyan-500 duration-500 " to ="#">Cabina</NavLink>
                </li>

                <button className="bg-red-500 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-red-800 rounded  flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    Salir
                </button>

            </ul>

        </nav>
    )




}

export default Navbar3