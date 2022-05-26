import './App.css';
import Home from './Pages/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import AuthState from "./context/authentication/authState";
function App() {
  return (
    <AuthState>
      <Router>
        <Switch>
          <Route path = ''></Route>
        </Switch>
      </Router>
      <Home />
    </AuthState>
  );
}

export default App;
