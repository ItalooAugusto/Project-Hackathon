import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';



export default function Menu() {
  return (
    <>

      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="#navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="#navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link to="/" className="Links">Home</Link>
              </li>
              <li class="nav-item">
                <Link to="/projeto" className="Links">Projeto</Link>

              </li>
              <li class="nav-item">
                <Link to="/equipe" className="Links">Equipe</Link>
              </li>
              <li class="nav-item">
                <Link to="/login" className="Links">Login</Link>
                
              </li>
              <li class="nav-item">
                <Link to="/cadastro" className="Links">Cadastro</Link>
              </li>
              
              

            </ul>

          </div>
        </nav>

      </header>







    </>
  );
}


