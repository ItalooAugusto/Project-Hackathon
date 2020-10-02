import React from 'react';
import Menu from '../Menu';
import './styles.css';
import LoginLogo from '../../assets/4us200.png';

export default function Login() {
    return (
        <>
            <Menu />

            <div>
                <div className="centro">
               
                <img src={LoginLogo} alt="logo" className="Login-logo"/>
                  
                    <form className="tela-login" action="../../api/login.php" method="POST">
                        <label>Usuário:</label>
                        <input className="input" type="text" name="login"></input>
                        <br></br>
                        <label>Senha: </label>
                        <input className="input" type="password" name="password">
                        </input><br /><br />
                        <input className="login" type="submit" name="" value="Login">
                        </input><br /><br />
               Esqueceu sua senha?
                Ainda não possui cadastro?
            </form>
                </div>
            </div>
        </>
    );
}