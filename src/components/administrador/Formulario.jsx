import React from 'react'
import { fetchConToken } from '../../helpers/fetch';
import { UserSchema } from '../../helpers/formValidation';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { arrayValues } from '../../helpers/arrayValuesForFom';
import { useLocation, useNavigate, useOutletContext } from 'react-router-dom';



const Formulario = ({ children }) => {

    const [usuarios, setUsuarios] = useOutletContext();
    const navigate = useNavigate();
    const location = useLocation();


    let ciRegistrados = usuarios.map(u => u.ci);
    let userRegistrados = usuarios.map(u => u.user);
    let emailRegistrados = usuarios.map(u => u.email);
    let siglaRegistradas = usuarios.map(u => u.sigla);



    const { register, handleSubmit, watch, formState: { errors } } = useForm(

        {
            defaultValues: {},
            resolver: yupResolver(UserSchema(ciRegistrados, userRegistrados, emailRegistrados, siglaRegistradas))
        }

    );

    const { estadocivil, roles, turnosBack, razas } = arrayValues;
    const { name, apellido1, apellido2, ci, role, turno, telf, raza, user, email, password1, password2, sigla, direccion, estadoc } = register;





    const onSubmit = async values => {

        try {

            const {name, apellido1, apellido2, ci, role, turno, telf, user, email, password1, sigla, direccion } = values

            let status = true;
            let password = password1;

            const resp = await fetchConToken('auth/registrer', {
                name, apellido1, apellido2, ci, role, turno, telf, user,
                email, password, sigla, direccion, status
            }, 'POST');
            const body = await resp.json();
            setUsuarios((usuarios)=>usuarios.concat(body.usuario));
            navigate( location.pathname.split('/').slice(0,-1).join('/') + '/gestionar')


        } catch (error) {
            console.log(error)
        }
    };


    return (
        <div className='md:flex md:justify-center '>
            <form
                className='sm:w-full bg-white shadow rounded-lg p-10  md:w-3/4 lg:w-3/2   '
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className=' grid sm:grid-cols-1 md:grid-cols-3 gap-4'>

                    <div className='my-1'>
                        <label
                            className='uppercase text-gray-600 block text-xl  font-bold'
                            htmlFor='name'
                        >Nombre</label>

                        <input className={`w-full mt-3 p-3 border  rounded-xl  bg-gray-50
                         ${errors.name ? 'border-rose-600' : ''}`} {...register("name")} placeholder="Introduzca su nombre"
                            id="name"
                        />
                        <p className='italic text-center text-red-400'>{errors.name?.message}</p>
                    </div>

                    <div className='my-1'>
                        <label
                            className='uppercase text-gray-600 block text-xl  font-bold'
                            htmlFor='apellido1'
                        >Apellido</label>

                        <input className={`w-full mt-3 p-3 border  rounded-xl  bg-gray-50
                         ${errors.apellido1 ? 'border-rose-600' : ''}`} {...register("apellido1")} placeholder="Introduzca su primer apellido"
                            id="apellido1"
                        />
                        <p className='italic text-center text-red-400'>{errors.apellido1?.message}</p>
                    </div>

                    <div className='my-1'>
                        <label
                            className='uppercase text-gray-600 block text-xl  font-bold'
                            htmlFor='apellido2'
                        >Apellido</label>

                        <input className={`w-full mt-3 p-3 border  rounded-xl  bg-gray-50
                         ${errors.apellido1 ? 'border-rose-600' : ''}`} {...register("apellido2")} placeholder="Introduzca su segundo apellido"
                            id="apellido2"
                        />
                        <p className='italic text-center text-red-400'>{errors.apellido2?.message}</p>
                    </div>

                    <div className='my-1'>
                        <label
                            className='uppercase text-gray-600 block text-xl  font-bold'
                            htmlFor='ci'
                        >Carnet</label>

                        <input className={`w-full mt-3 p-3 border  rounded-xl  bg-gray-50
                         ${errors.ci ? 'border-rose-600' : ''}`} {...register("ci")} placeholder="Introduzca su numero de carnet de identidad"
                            id="ci"
                            type="number"
                        />
                        <p className='italic text-center text-red-400'>{errors.ci?.message}</p>
                    </div>

                    <div className='my-1'>
                        <label
                            className='uppercase text-gray-600 block text-xl  font-bold'
                            htmlFor='direccion'
                        >Direccion</label>

                        <input className={`w-full mt-3 p-3 border  rounded-xl  bg-gray-50
                         ${errors.direccion ? 'border-rose-600' : ''}`} {...register("direccion")} placeholder="Dirección de localización"
                            id="direccion"
                        />
                        <p className='italic text-center text-red-400'>{errors.direccion?.message}</p>
                    </div>

                    <div className='my-1'>
                        <label
                            className='uppercase text-gray-600 block text-xl  font-bold'
                            htmlFor='sigla'
                        >Sigla</label>

                        <input className={`w-full mt-3 p-3 border  rounded-xl  bg-gray-50
                         ${errors.sigla ? 'border-rose-600' : ''}`} {...register("sigla")} placeholder="Las siglas preferentemente deben ser sus iniciales"
                            id="sigla"
                        />
                        <p className='italic text-center text-red-400'>{errors.sigla?.message}</p>
                    </div>


                    <div className='my-1'>
                        <label
                            className='uppercase text-gray-600 block text-xl  font-bold'
                            htmlFor='estadoc'
                        >Estado Civil</label>


                        <select
                            id='estadoc'
                            className={`w-full mt-3 p-3 border rounded-xl bg-gray-50 ${errors.estadoc ? 'border-rose-600' : ''}`}
                            {...register("estadoc")}

                        >
                            <option key="Seleccione" value="Seleccione">Seleccione</option>
                            {estadocivil.map(o => (
                                <option key={o} value={estadocivil.value}> {o} </option>
                            ))}

                        </select>

                        <p className='italic text-center text-red-400'>{errors.estadoc?.message}</p>
                    </div>

                    <div className='my-1'>
                        <label
                            className='uppercase text-gray-600 block text-xl  font-bold'
                            htmlFor='raza'
                        >Raza</label>


                        <select
                            id='raza'
                            className={`w-full mt-3 p-3 border rounded-xl bg-gray-50 ${errors.raza ? 'border-rose-600' : ''}`}
                            {...register("raza")}

                        >
                            <option key="Seleccione" value="Seleccione">Seleccione</option>
                            {razas.map(o => (
                                <option key={o} value={o.value}> {o} </option>
                            ))}

                        </select>

                        <p className='italic text-center text-red-400'>{errors.raza?.message}</p>
                    </div>

                    <div className='my-1'>
                        <label
                            className='uppercase text-gray-600 block text-xl  font-bold'
                            htmlFor='role'
                        >Rol</label>


                        <select
                            id='role'
                            className={`w-full mt-3 p-3 border rounded-xl bg-gray-50 ${errors.role ? 'border-rose-600' : ''}`}
                            {...register("role")}

                        >
                            <option key="Seleccione" value="Seleccione">Seleccione</option>
                            {roles.map(o => (
                                <option key={o} value={o.value}> {o} </option>
                            ))}

                        </select>

                        <p className='italic text-center text-red-400'>{errors.role?.message}</p>
                    </div>

                    <div className='my-1'>
                        <label
                            className='uppercase text-gray-600 block text-xl  font-bold'
                            htmlFor='turno'
                        >Turno</label>


                        <select
                            id='turno'
                            className={`w-full mt-3 p-3 border rounded-xl bg-gray-50 ${errors.turno ? 'border-rose-600' : ''}`}
                            {...register("turno")}

                        >
                            <option key="Seleccione" value="Seleccione">Seleccione</option>
                            {turnosBack.map(o => (
                                <option key={o} value={o.value}> {o} </option>
                            ))}

                        </select>

                        <p className='italic text-center text-red-400'>{errors.turno?.message}</p>
                    </div>


                    <div className='my-1'>
                        <label
                            className='uppercase text-gray-600 block text-xl  font-bold'
                            htmlFor='telf'
                        >Celular</label>

                        <input className={`w-full mt-3 p-3 border  rounded-xl  bg-gray-50
                         ${errors.ci ? 'border-rose-600' : ''}`} {...register("telf")} placeholder="Introduzca su número de móvil"
                            id="telf"
                            type="number"
                        />
                        <p className='italic text-center text-red-400'>{errors.telf?.message}</p>
                    </div>

                    <div className='my-1'>
                        <label
                            className='uppercase text-gray-600 block text-xl  font-bold'
                            htmlFor='user'
                        >Usuario</label>

                        <input className={`w-full mt-3 p-3 border  rounded-xl  bg-gray-50
                         ${errors.user ? 'border-rose-600' : ''}`} {...register("user")} placeholder="Introduzca un nombre de usuario único"
                            id="user"
                        />
                        <p className='italic text-center text-red-400'>{errors.user?.message}</p>
                    </div>

                    <div className='my-1'>
                        <label
                            className='uppercase text-gray-600 block text-xl  font-bold'
                            htmlFor='email'
                        >Email</label>

                        <input className={`w-full mt-3 p-3 border  rounded-xl  bg-gray-50
                         ${errors.email ? 'border-rose-600' : ''}`} {...register("email")} placeholder="Introduzca un nombre de usuario único"
                            id="email"
                        />
                        <p className='italic text-center text-red-400'>{errors.email?.message}</p>
                    </div>

                    <div className='my-1'>
                        <label
                            className='uppercase text-gray-600 block text-xl  font-bold'
                            htmlFor='password1'
                        >Password</label>

                        <input className={`w-full mt-3 p-3 border  rounded-xl  bg-gray-50
                         ${errors.password1 ? 'border-rose-600' : ''}`} {...register("password1")} placeholder="Introduzca una contraseña fuerte"
                            id="password1"
                            type="password"
                        />
                        <p className='italic text-center text-red-400'>{errors.password1?.message}</p>
                    </div>

                    <div className='my-1'>
                        <label
                            className='uppercase text-gray-600 block text-xl  font-bold'
                            htmlFor='password2'
                        >Password</label>

                        <input className={`w-full mt-3 p-3 border  rounded-xl  bg-gray-50
                         ${errors.password2 ? 'border-rose-600' : ''}`} {...register("password2")} placeholder="Repita su contraseña "
                            id="password2"
                            type="password"
                        />
                        <p className='italic text-center text-red-400'>{errors.password2?.message}</p>
                    </div>





                </div>




                <input
                    type="submit"
                    value={children}
                    className='bg-red-800 w-full py-3 text-white uppercase font-bold
    rounded-xl hover:cursor-pointer hover:bg-red-900 transition-colors my-5'
                />
                <p className='italic text-center text-red-400'>{Object.keys(errors).length === 0 ? "" : "Datos incorrectos. Revise los campos señalados"}</p>

            </form>
        </div>
    )
}

export default Formulario