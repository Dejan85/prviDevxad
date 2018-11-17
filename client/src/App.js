import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./redux/actions/authActions";

//components
import Home from "./components/layout/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Projects from "./components/layout/projects/Projects";
import ProjectContent from "./components/layout/projects/ProjectContent";

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
  console.log(currentTime);
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
          <div className="App ">
            {/* home routes */}
            <Route exact path="/" component={Home} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/projects" component={Projects} />
            {/* projects routes */}
            <Route
              exact
              path="/projects/technology"
              component={ProjectContent}
            />
            <Route
              exact
              path="/projects/technology/javasript"
              component={ProjectContent}
            />
            <Route
              exact
              path="/projects/technology/react"
              component={ProjectContent}
            />
            <Route
              exact
              path="/projects/technology/node"
              component={ProjectContent}
            />
            <Route
              exact
              path="/projects/technology/mern"
              component={ProjectContent}
            />
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
