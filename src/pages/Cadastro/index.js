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
                        <label className="campos">Nome:</label>
                        <input className="conteudo" type="text"></input>
                        <br></br>
                        <label className="campos">E-mail:</label>
                        <input className="conteudo" type="text"></input>
                        <br></br>
                        <label className="campos">Senha: </label>
                        <input className="conteudo-menor" type="password">
                        </input><br /><br />
                        <hr></hr>
                        <br></br>
                        <label className="campos">Endereço:</label>
                        <input className="conteudo" type="text"></input> <label> Nº</label><input className="conteudo-menor"></input>
                        <br></br>
                        <label className="campos">Bairro:</label>
                        <input className="conteudo" type="text"></input>
                        <br></br>
                        <label className="campos">País:</label>
                        <select className="conteudo-menor">
                            <option value="Brasil">Brasil</option>
                        </select>
                        <br></br>
                        <label className="campos">Estado:</label>
                        <select className="conteudo-menor">
                            <option value="São Paulo">São Paulo</option>
                        </select>
                        <br></br>
                        <hr></hr>
                        <br></br>
                        <label className="campos">Telefone:</label>
                        <input className="ddd" type="number "></input><input className="conteudo-menor" type="text" ></input>
                        <br></br>
                        <label className="campos">Data Nasc:</label>
                        <input className="conteudo-menor" type="date"></input>
                        <br></br>
                        <label className="campos">Sexo: </label>
                        <ul>
                            <li>
                                <input className="chekmark" type="checkbox">
                                </input>Feminino
                            </li>
                            <li>
                                <input className="checkmark" type="checkbox">
                                </input>Masculino</li>

                            <li><input className="checkmark" type="checkbox">
                            </input>Anônimo</li>
                        </ul>
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