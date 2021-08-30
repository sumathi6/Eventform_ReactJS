import React,{Component} from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Form from "./components/Form";
import Confirmation from "./components/Confirmation";

class App extends Component{
  render() {
    return  <Router>
    <Switch>
      <Route exact path="/" component={Form} />
      <Route path="/confirmation" component={Confirmation} />
    </Switch>
  </Router>
  }
}

export default App;
