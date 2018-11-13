import React, { Component } from "react";
import "./App.css";
import "./components/responsiveCss/480px.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";

//components
import NavBar from "./components/layout/partials/NavBar";
import Home from "./components/layout/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";

//Redux
import { Provider } from "react-redux";
import store from "./redux/store";

//Check for token
if (localStorage.jwtToken) {
  //Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  //Decode token and get user info and experation
  const decode = jwt_decode(localStorage.jwtToken);
  //Set user and isAuthenticated
  store.dispatch(setCurrentUser(decode));
  //check for expired token
  const currentTime = Date.now() / 1000;
  if (decode.exp < currentTime) {
    //Logout user
    store.dispatch(logoutUser());
    //TODO: Cleare current Profile

    //Redirect to login
    window.location.href = "/login";
  }
}

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
