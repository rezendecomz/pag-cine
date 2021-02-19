import { useState, useEffect } from 'react';
import User from './status';
import filmes from './filmes/listaFilmes'

const MinhaConta = () => {
 
  return ( 
    <div>
    {useEffect(() => {
      document.getElementById('login').innerText = 'Bem-vindo, Fulano';
    })}
<div className="container mt-2">
  <div className="row">
    <div className="col d-flex justify-content-center align-items-center" style={{backgroundColor: 'coral', height: '50px'}}>
      <h5 style={{color: 'white'}}>Olá, Fulano.
        Bem-vindo à sua conta :)</h5>
    </div>
  </div>
  <div className="row">
    <div className="col d-flex justify-content-center align-items-center bg-primary" style={{height: '40px'}}>
      <p style={{color: 'white'}} className='mt-3'>Dados pessoais - Formas de pagamento - Logout</p>
    </div>
  </div>


    
    <div className='listaDeFilme mt-4'>
      {filmes.map( filme => (
<div class="card mt-3">
                <div className="row no-gutters mt-4">
            <div className="col-auto">
                <img src={filme['img']} className="img-fluid" alt=""/>
            </div>
            <div className="col">
                <div className="card-block px-2 d-flex align-items-start flex-column">

                    <h4 className="card-title mt-2">{filme['nome']}</h4>
                    <p className="card-text"><i className="fas fa-map-marker-alt fa-lg" />Cine Belas Artes, São Paulo</p>
                    <p className="card-text"><i class="fas fa-couch fa-lg"></i> H 13, H 14, H 15</p>
                    <p className="card-text"><i class="fas fa-calendar-alt fa-lg"></i>22/02/2021 - 19h30</p>
                    <p className="card-text"><i class="fas fa-dollar-sign fa-lg"></i> Total: R$ 60,50</p>
                    <p className="card-text"><i class="far fa-sticky-note fa-lg"></i>  Pedido: 654654645</p>

                </div>
            </div>
            <div className="col">
              <img src="./img/qrExample.png" alt="" srcset=""/>
            </div>
        </div>
    </div>
      )

      )}

    </div>

</div>
    </div>
   );
}
 
export default MinhaConta;