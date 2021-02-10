import filmes from './filmes/listaFilmes'

const ListaDeFilmes = () => {
  return (
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
    );
}
 
export default ListaDeFilmes;