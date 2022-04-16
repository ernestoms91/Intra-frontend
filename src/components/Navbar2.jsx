import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Navbar2 = () => {

  const [active, setActive] = useState(false);
  const [drop, setDrop] = useState(false);

  const handleActive = (e) => {
    e.preventDefault();
    setActive(!active);
  }

  const handleDrop = (e) => {
    e.preventDefault();
    setDrop(!drop);
  }

  return (
    <nav className='bg-red-700' >
      {/* container */}
      <div className='  rounded container px-4 flex flex-wrap py-2 '>
        {/* logo */}
        <NavLink className='inline-flex p-2 text-xl font-bold uppercase tracking-wider ' to="/">
          Radio Reloj </NavLink>

        { /* hamburguesa*/}
        <button className='lg:hidden inline-flex items-center justify-center border h-10 w-10 ml-auto
        text-white rounded-md outline-none focus:outline-none'
          onClick={handleActive}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Menu*/}
        <div className={`w-full bg-blue-500 lg:inline-flex lg:w-auto mt-2 lg:mt-0 ${active ? "" : "hidden"}`}>
          <ul className=' w-full lg:w-auto flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-2'>
            <li>
              <NavLink className='
            flex px-4  py-2 font-medium text-white 
            hover:bg-red-400 rounded-md 'to="/"> Usuarios </NavLink>
            </li>
            <li>
              <NavLink className='
            flex px-4  py-2 font-medium text-white
             hover:bg-red-400 rounded-md 'to="/"> Eventos </NavLink>
            </li>
            <li>
              <NavLink className='
            flex px-4  py-2 font-medium text-white 
            hover:bg-red-400 rounded-md 'to="/cabina"> Cabina </NavLink>
            </li>

            {/* ****************Dropdown****************** */}

            <li className='relative'>
              <button
                onClick={handleDrop}>
                <NavLink className='
            flex outline-none focus:outline-none px-4  py-2 font-medium text-white 
            hover:bg-red-400 rounded-md 'to="#"> Dropdown <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg> </NavLink>
              </button>

              {/*Dropdown menu*/}
              <div className={`lg:absolute bg-white right-0 rounded-md p-2 ${drop ? "flex flex-col" : "hidden"}`}>
                <ul className='space-y-2 lg:w-48'>
                  <li>
                    <NavLink className='flex p-2 font-medium rounded-md text-gray-600 hover:bg-red-400 hover:text-black' to="/">Categorias</NavLink>
                  </li>
                  <li>
                    <NavLink className='flex p-2 font-medium rounded-md text-gray-600 hover:bg-red-400 hover:text-black' to="/">Pinga</NavLink>
                  </li>
                  <li>
                    <NavLink className='flex p-2 font-medium rounded-md text-gray-600 hover:bg-red-400 hover:text-black' to="/">Jama</NavLink>
                  </li>
                </ul>
              </div>


              {/*Dropdown menu*/}
            </li>



          </ul>

        </div>
      </div>


    </nav>
  )
}

export default Navbar2