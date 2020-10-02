import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import { FaGithub } from 'react-icons/fa';
import Logo from '../../assets/4us.png';


export default function Menu() {
  return (
    <>
      <header> 
          <div>
            <Link to="/">
            <img src={Logo} alt="logo" />
            </Link>
          </div>
         
          <ul>
            <li>
              <Link to="/" className="Links">Home</Link>
            </li>
            <li>
              <Link to="/projeto" className="Links">Projeto</Link>
            </li>
            <li>
              <Link to="/equipe" className="Links">Equipe</Link>
            </li>
            <li>
              <Link to="/login" className="Links">Login</Link>
            </li>
            <li>
              <Link to="/cadastro" className="Links">Cadastro</Link>
            </li>
            <li className="social"><FaGithub size={20} color="#ffffff" /></li>
          </ul>
      </header>







    </>
  );
}


