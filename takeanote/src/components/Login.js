import { useContext, useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';

import global from "../helpers/global";
import AuthContext from "../context/authentication/authContext";

const Login = () => {
    const authContext = useContext(AuthContext);
    const { usuario, signIn, usuarioAutenticado } = authContext;
    useEffect(() => {
        if (!usuario) {
          usuarioAutenticado();
        }
      }, [usuario]);
    const onSuccess = (res) => {
        signIn([res.profileObj, res.getAuthResponse().id_token]);
    }
   
    const onFailure = (res) => {
        document.getElementById('alert').innerHTML = "Hubo un error";
    }
    return (
        <>
            <GoogleLogin
                clientId={global.clientId}
                buttonText="Iniciar sesion con google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
            />
            <p id="alert"></p>
        </>
    );
}

export default Login;