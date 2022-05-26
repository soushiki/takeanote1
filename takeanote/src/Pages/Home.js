import { gapi } from 'gapi-script';
import { useContext, useEffect } from 'react';
import Login from '../components/Login';
import global from '../helpers/global';
import {useHistory} from "react-router-dom";
import {SCOPES,} from '../../types';
import Logo from '../img/logo.png';
import AuthContext from "../context/authentication/authContext";
import Logout from '../components/Logout';

const Home = () => {
    const authContext = useContext(AuthContext);
    const { usuario, autenticado, usuarioAutenticado } = authContext;
    const history = useHistory()
    
    
    useEffect(() => {
        if (!usuario) {
          usuarioAutenticado();
        }
      }, []);
    useEffect(() => {
        const start = () => {
            gapi.client.init({
                clientId: global.clientId,
                scope: SCOPES
            });
        }
        gapi.load("client:auth2". start);
    }, [])

    return (
        <div className="wrapper">
            <div className="box-log">
                <div className="header-form">
                    <div className="logo">
                        <figure>
                            <img src={Logo} alt="Logo" />
                        </figure>
                    </div>
                    <h1>Iniciar sesión</h1>
                    <p>Continuar con <b>Take a Note</b></p>
                </div>
                <form autoComplete="off">
                    <div className="box-log-input-group">
                        {autenticado === null ? <Login /> : <Logout />}
                    </div>
                </form>
            </div>

        </div>
    );
}

export default Home;