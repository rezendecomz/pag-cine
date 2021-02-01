import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import './css/bootstrap.min.css'
import './css/style.css'
import ListaDeFilmes from './listaDeFilmes';

function App() {
  return (
<div>
  <div className="container">
    <Navbar />
    <Home />
    <ListaDeFilmes/>
      </div>
</div>
  );
}

export default App;
