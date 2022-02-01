import 'bootstrap/dist/css/bootstrap.min.css';
import { Router, Switch, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import './App.css';
import ListQues from './Quesbankpractice/ListQues';
import Navbar from './Common/Navbar';
import QuesSet from './Quesbankpractice/QuesSet';
import AddQues from './Quesbankpractice/AddQues';



function App() {
  return (
    <div>
      <Navbar/>


    <Switch>
      <Route exact path="/list" component={ListQues}/>
      <Route exact path="/" component={QuesSet}/>
      <Route exact path="/addques" component={AddQues}/>
      
    </Switch>
    </div>
  );
}

export default App;
