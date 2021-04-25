import Home from './Home';
import Navbar from './Navbar';
import './css/bootstrap.min.css'
import './css/style.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ListaDeFilmes from './ListaDeFilmes';
import Login from './Login'
import Registro from './Registro'
import Esqueci from './Esqueci'
import MinhaConta from './MinhaConta'
import Trailer from './filmes/trailer'
import Programacao from './Programacao'
import Cinema from './components/Cinema'
import { chairs } from './utils';

function App() {

  return (
    <Router>
      <div>

        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/em-cartaz">
              <ListaDeFilmes />
            </Route>
            <Route exact path="/lista-de-filmes">
              <ListaDeFilmes />
            </Route>
            <Route exact path="/trailers/:id">
              <Trailer />
            </Route>
            <Route exact path="/ingressos/54321">
              <Cinema chairs={chairs} />
            </Route>
            <Route exact path="/programacao">
              <Programacao />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/minhaConta">
              <MinhaConta />
            </Route>
            <Route exact path="/registro">
              <Registro />
            </Route>
            <Route exact path="/esqueci">
              <Esqueci />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
