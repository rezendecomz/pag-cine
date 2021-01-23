const Carrousel = () => {
  return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src="./img/slide-ww84.jpg" className="d-block w-100" alt="WW84" />
        </div>
        <div className="carousel-item">
          <img src="./img/slide-trolls2-hoje.jpg" className="d-block w-100" alt="Trolls" />
        </div>
        <div className="carousel-item">
          <img src="./img/slide-legadoexplosivo.jpg" className="d-block w-100" alt="Legado Explosivo" />
        </div>
      </div>
      <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}
 
export default Carrousel;