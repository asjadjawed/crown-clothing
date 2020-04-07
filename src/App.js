import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { auth } from "./firebase/firebase";

import "./App.scss";

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import SignInRegister from "./pages/SignInRegister/SignInRegister";

class App extends Component {
  state = {
    currentUser: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) =>
      this.setState({ currentUser: user })
    );
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact component={Homepage} path="/"></Route>
          <Route exact component={Shop} path="/shop"></Route>
          <Route exact component={SignInRegister} path="/signin"></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
