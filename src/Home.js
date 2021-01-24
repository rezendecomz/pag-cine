import Carrousel from './Carousel';
import Posters from './Posters'
import { useState } from 'react'; // Testando


const Home = () => {

  // Testando
  // const [nome, setNome] = useState('Gabriel')
  // const [idade, setIdade] = useState(30)

  // const handleClick = () => {
  //   setNome('Rezende')
  //   setIdade(idade + 1)
  // }
// FIM DO TESTE


  return (
    <div className="home">
    <Carrousel />
  <br />
    <Posters />
    {/* <br/> <!-- TESTE -->
    <div className="teste">
    <h3>Testando:</h3>
    <p>{ nome } tem { idade } anos</p>
    <button onClick={handleClick}>Troca nome</button>
    </div> */}
</div>
  );
}
 
export default Home;