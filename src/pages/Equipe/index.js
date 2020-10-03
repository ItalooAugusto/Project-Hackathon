import React from 'react';
import Menu from '../Menu';


export default function Equipe() {
  return (
    <>
      <Menu />
      
      <hr/>
      <br/>

      <div class="card col-6 mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="..." class="card-img" alt="..."></img>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Renan Costa</h5>
              <p class="card-text">Negócios</p>
              <p class="card-text">Preparar as apresentações e montar a arquitetura do projeto apresentado.</p>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <div class="card col-6 mb-3">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="..." class="card-img" alt="..."></img>
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">Elias </h5>
              <p class="card-text">Tecnologia</p>
              <p class="card-text">Chatbot integração WATSON.</p>
              <p class="card-text">https://github.com/ecjN00B/</p>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}


