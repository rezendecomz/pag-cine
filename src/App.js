import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import './css/bootstrap.min.css'
import './css/style.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ListaDeFilmes from './EmCartaz';
import Login from './Login'
import Registro from './Registro'
import Esqueci from './Esqueci'

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
    <Route exact path="/em-cartaz">
        <ListaDeFilmes/>
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
    <Route exact path="/esqueci">
      <Esqueci/>
    </Route>
  </Switch>
      </div>
</div>
    </Router>
  );
}

export default App;
