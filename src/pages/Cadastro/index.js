import React from 'react';
import Menu from '../Menu';
import './styles.css';


export default function Cadastro() {
    return (
        <>
            <Menu />

            <hr></hr>


            <div className="container">
                <form className="tela-cadastro">
                    <fieldset>
                        <legend>CADASTRO:</legend>
                        <label className="campos">Qual é o seu Nome:</label>
                        <br></br>
                        <input className="conteudo" type="text" placeholder="Nome"></input>
                        <br></br>
                        <input className="conteudo" type="text" placeholder="Sobrenome"></input>
                        <br></br>
                        <label className="campos">Login: </label>
                        <br></br>
                        <input className="conteudo-menor" type="text" placeholder="Login">
                        </input><br /><br />
                        <label className="campos">Senha: </label>
                        <br></br>
                        <input className="conteudo-menor" type="password" placeholder="Senha">
                        </input><br /><br />
                        <br></br>
                        <label className="campos">Qual é a sua localidade:</label>
                        <br></br>
                        <br></br>
                        <label className="campos">Bairro:</label>
                        <br></br>
                        <input className="conteudo" type="text" placeholder="Bairro"></input>
                        <br></br>
                        <label className="campos">País:</label>
                        <br></br>
                        <select className="conteudo-menor">
                            <option value="Brasil">Brasil</option>
                        </select>
                        <br></br>
                        <label className="campos">Estado:</label>
                        <br></br>
                        <select className="conteudo-menor">
                            <option value="São Paulo">São Paulo</option>
                        </select>
                        <br></br>
                        <label className="campos">Telefone:</label>
                        <input className="conteudo" type="text" placeholder="( XX ) XXXXX-XXXX"  ></input>
                        <br></br>

                        <input className="" type="submit" name="" value="Cadastrar">
                        </input>
                        <input className="" type="submit" name="" value="Cancelar">
                        </input>
                        <br /><br />
                    </fieldset>
                </form>
            </div>


        </>
    );
}