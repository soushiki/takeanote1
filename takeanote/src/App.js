import './App.css';
import Home from './Pages/Home';
import ChooseUser from './Pages/chooseUser';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import AuthState from "./context/authentication/authState";
function App() {
  return (
    <AuthState>
      <Router>
        <Routes>
          <Route path = {Routes.home} element = {<Home/>}/>
          <Route path = {Routes.choose} element = {<ChooseUser/>}/>
        </Routes>
      </Router>
      <Home />
    </AuthState>
  );
}

export default App;
