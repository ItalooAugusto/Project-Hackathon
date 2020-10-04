import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import Logo from '../../assets/4us.png';



export default function Menu() {
  return (
    <>

      <header>
        <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-left">

          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>
            
            <ul class="navbar-nav">
              <li class="nav-item active">
                <Link to="/" className="Links">Home</Link>
              </li>

            </ul>
         
        </nav>

      </header>







    </>
  );
}


