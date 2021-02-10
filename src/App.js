import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import './css/bootstrap.min.css'
import './css/style.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListaDeFilmes from './listaDeFilmes';
import Login from './Login'
import Registro from './Registro'

function App() {
  return (
    <Router>
<div>

  <div className="container">
  <Navbar />
  <Switch>
    <Route exact path="/">
      <Home/>
    </Route>
    <Route exact path="/lista-de-filmes">
        <ListaDeFilmes/>
    </Route>
    <Route exact path="/login">
      <Login/>
    </Route>
        <Route exact path="/registro">
      <Registro/>
    </Route>
  </Switch>
      </div>
</div>
    </Router>
  );
}

export default App;
