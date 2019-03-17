import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser, admin } from "./redux/actions/authActions";
import PrivateRoute from "./components/common/PrivateRoute";

//components
import Home from "./components/layout/home/Home";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Projects from "./components/layout/projects/Projects";
import ProjectContent from "./components/layout/projects/ProjectContent";
import Dashboard from "./components/admin/Dashboard";

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
  store.dispatch(admin(decode));

  //check for expired token
  const currentTime = Date.now() / 5600;
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
            <Switch>
              <PrivateRoute
                exact
                path="/admin/dashboard"
                component={Dashboard}
              />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
