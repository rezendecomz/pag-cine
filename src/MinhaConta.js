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
<div class="card">
      {filmes.map( filme => (
                <div className="row no-gutters mt-4">
            <div className="col-auto">
                <img src={filme['img']} className="img-fluid" alt=""/>
            </div>
            <div className="col">
                <div className="card-block px-2 d-flex align-items-start flex-column">
                <div className="row">
                    <div className="col-md-6">
                    <a href="#" className="btn btn-primary">Comprar ingressos</a>
                    </div>
                     <div className="col-md-6">
                    <a href="#" className="btn btn-primary">Assistir trailer</a>
                    </div>
                </div>
                    <h4 className="card-title mt-2">{filme['nome']}</h4>
                    <p className="card-text">{filme['sinopse']}</p>
                    <p><span>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="far fa-star"></i>
                    
                    
                    </span></p>
                </div>
            </div>
        </div>
      )

      )}

    </div>
    </div>

</div>
    </div>
   );
}
 
export default MinhaConta;