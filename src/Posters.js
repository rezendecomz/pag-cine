import filmes from './filmes/listaFilmes'
import { useState } from 'react';
// Adicionar tooltips

const Posters = () => {
  const [ listaFilmes, setListaFilmes ] = useState(filmes.slice(0, 4))
  console.log(listaFilmes);
  console.log(filmes)
  return (
    <div>
      <div className="row">
      { listaFilmes.map( filme => (
        <div className="col-md-6 col-lg-3" id={filme['id']}>
          <div className="card">
            <img src={filme['img']} alt="" className="card-img-top" />
          </div>
        </div>
      ))}
    </div>
</div>
  );
}
 
export default Posters;