import * as React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from './history'
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage"
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import HomePage from './pages/HomePage'
import './App.css'
import "tabler-react/dist/Tabler.css";

class App extends React.Component {
  render() {
    return (
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={LoginPage} />
            <Route exact path="/register" component={RegisterPage} />
            <Route exact path="/forgot-password" component={ForgotPasswordPage} />
            <Route exact path="/home" component={HomePage} />
          </Switch>
        </Router>
     
    );
  }
}

export default App;
