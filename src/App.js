import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import './css/bootstrap.min.css'
import './css/style.css'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <Router>
<div>

  <div className="container">
      <Navbar />
  <Switch>
    <Route path="/">
      <Home/>
    </Route>
    </Switch>
      </div>
</div>
    </Router>
  );
}

export default App;
