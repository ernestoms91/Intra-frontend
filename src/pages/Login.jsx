
import Header from '../components/Header'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { url } from '../helpers/url';
import LoginArea from '../components/login/LoginArea';
import Noticia from '../components/login/Noticia';


const Login = () => {

  const { checking, uid, rol } = useSelector(state => state.auth)


//     if ( checking ) {
//     return <div>Espere....</div>
// }

  console.log(typeof(rol));
  
if(uid){
  console.log('Bien');
  let url2 = url(rol);
  console.log(url2);
}

  return (
    <>

    { uid ? (<Navigate to={'/' + url(rol) } />) :(<div className="container h-screen mx-auto">
      <Header/>

      <div className='sm:flex  h-4/5 ' >
        <LoginArea/>
        <Noticia/>
      </div>

      </div>
    )}
      </>
  )
}

export default Login