import logo from './logo.svg';
import './App.css';
import { Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Texteditor from './Texteditor';
function App() {
  return (
    
    <div>
<Texteditor/>
      <Switch>
      <Route exact path="/text" component={Texteditor}/>
      
    </Switch>
    </div>
      
  );
}

export default App;
