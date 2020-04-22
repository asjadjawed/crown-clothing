import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase";
import { connect } from "react-redux";

import "./App.scss";

import { setCurrentUser } from "./redux/user/user.actions";

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";
import SignInRegister from "./pages/SignInRegister/SignInRegister";

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((user) =>
          setCurrentUser({ id: user.id, ...user.data() })
        );
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact component={Homepage} path="/"></Route>
          <Route exact component={Shop} path="/shop"></Route>
          <Route exact component={SignInRegister} path="/signin"></Route>
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  // setCurrentUser will be passed down in props to App component
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(null, mapDispatchToProps)(App);
