import { Link } from "react-router-dom";
import filmes from './listaFilmes';

const Trailer = () => {
  return ( 
    <div className="container">
    <div className="card mt-3 p-3">
          <h1>{filmes[0]['nome']}</h1>
      <div class="embed-responsive embed-responsive-16by9">
        <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/XqcsS1azJ_g?rel=0" allowfullscreen></iframe>
      </div>

      <div class="card mt-3">
                <div className="row no-gutters mb-2">
            <div className="col-auto mb-2">
                <img src={filmes[0]['img']} className="img-fluid" alt=""/>
            </div>
            <div className="col-4 " style={{backgroundColor:'rgba(0, 0, 0, 0.1)'}}>
                <div className="card-block px-2 d-flex align-items-start flex-column">

                    <h4 className="card-title mt-2">{filmes[0]['nome']}</h4>
                    <p>Cinema mais próximo:</p>
                    <p className="card-text"><i className="fas fa-map-marker-alt fa-lg" />Cine Belas Artes, São Paulo</p>
                    <p>Próxima sessão:</p>
                    <p className="card-text"><i class="fas fa-calendar-alt fa-lg"></i>22/02/2021 - 19h30</p>
                    <p className="card-text"><i class="fas fa-video fa-lg"></i>Comum, IMAX, 3D</p>
                    <p>Ingressos a partir de:</p>
                    <p className="card-text"><i class="fas fa-dollar-sign fa-lg"></i> Total: R$ 60,50</p>
                </div>
            </div>
            <div className="col">
                <div className="card-block px-2 d-flex align-items-start flex-column">
                    <h4 className="card-title mt-2">Sinopse</h4>
                    <p className="card-text">{filmes[0]['sinopse']}</p>
                    <p className="card-text"><i class="far fa-id-card fa-lg"></i>   {filmes[0]['classificacao']}</p>
      <Link to="/ingressos/54321" className="btn btn-primary mt-3">Ingressos</Link>


                </div>
            </div>
            <div className="col-auto">
              <img src="./img/qrExample.png" alt="" srcset=""/>
            </div>
        </div>
    </div>


    </div>

    </div>

   );
}
 
export default Trailer;