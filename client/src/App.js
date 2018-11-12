import React, { Component } from "react";
import "./App.css";
import "./components/responsiveCss/480px.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//components
import NavBar from "./components/layout/partials/NavBar";
import Home from "./components/layout/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container ">
            <NavBar />
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
