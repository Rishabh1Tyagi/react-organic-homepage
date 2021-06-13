import { Switch, Route } from "react-router-dom";

import './App.css';
import NavBar from './components/NavigationBar/NavBar';

function App() {
  return (
    <div>
     <NavBar/>
     <Switch>
       <Route exact path="/"/>
     </Switch>
    </div>
  );
}

export default App;
