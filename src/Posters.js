const filmes = require('./filmes/listaFilmes')

const Posters = () => {
  return (
 
      <div className="row">
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <img src="./img/posters/um-tio-quase-perfeito-2-poster-desktop.jpg" alt="" className="card-img-top" />
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <img src="./img/posters/mulher-maravilha-1984-poster-desktop.jpg" alt="" className="card-img-top" />
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <img src="./img/posters/o-tempo-com-voce-poster-desktop.jpg" alt="" className="card-img-top" />
          </div>
        </div>
        <div className="col-md-6 col-lg-3">
          <div className="card">
            <img src="./img/posters/trolls-2-poster-desktop.jpg" alt="" className="card-img-top" />
          </div>
        </div>
        <div>
          <p>{filmes[0].nome}</p>
        </div>
      </div>

  );
}
 
export default Posters;