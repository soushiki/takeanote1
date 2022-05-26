import Logo from '../img/logo.png';

const chooseUser = () => {
    return(
    <div className="wrapper">
        <div className="box-log">
            <div className="header-form">
                <div className="logo">
                    <figure>
                        <img src={Logo} />
                    </figure>
                </div>
                <h1>Bienvenido namePlaceholder</h1>
                <p>Escoja un tipo de usuario</p>
            </div>
            <form autoComplete="off">
                <div style="display: flex;">
                    <div className="box-log-input-group" style="margin: 0 10px">
                        <button className="btn-user"  >Estudiante</button>
                    </div>
                    <div className="box-log-input-group">
                        <button className="btn-user" >Docente </button>
                    </div>
                </div>
            </form>
            <p id="alert"></p>
        </div>
    </div>
    );
}

export default chooseUser;