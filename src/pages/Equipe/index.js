import React from 'react';
import Menu from '../Menu';
import Renan from '../../assets/Renan.jpg';
import Elias from '../../assets/Elias.jpg';
import Italo from '../../assets/Italo.png';
import Maykon from '../../assets/Maykon.jpg';
import Michele from '../../assets/Michele.jpg';
import './styles.css';


export default function Equipe() {
  return (
    <>
      <Menu />

      <hr />
      <br />
      <div class="container">

        <h1 className="time"> BERITH Team</h1>
        <br/>
        <div class="card col-6 mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={Renan} class="card-img" alt="..."></img>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Renan</h5>
                <p class="card-text">Negócios <br/>
                Preparar as apresentações e montar a arquitetura do projeto apresentado.</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="card col-6 mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={Elias} class="card-img" alt="Elias"></img>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Elias </h5>
                <p class="card-text">Tecnologia<br />
                Chatbot integração WATSON.<br/>
                https://github.com/ecjN00B/</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="card col-6 mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={Italo} class="card-img" alt="Italo"></img>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Ítalo </h5>
                <p class="card-text">Tecnologia<br/>
                 Web.<br/>
                https://github.com/noiiba</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="card col-6 mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={Maykon} class="card-img" alt="Maykon"></img>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Maykon </h5>
                <p class="card-text">Tecnologia</p>
                <p class="card-text"></p>
                <p class="card-text"></p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <div class="card col-6 mb-3">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src={Michele} class="card-img" alt="Michele"></img>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Michelle </h5>
                <p class="card-text">Designer<br />
                https://www.behance.net/michelleoliverdesign</p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}


