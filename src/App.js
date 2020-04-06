import React from "react";
import { Switch, Route } from "react-router-dom";

import "./App.scss";

import Header from "./components/Header/Header";
import Homepage from "./pages/Homepage/Homepage";
import Shop from "./pages/Shop/Shop";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact component={Homepage} path="/"></Route>
        <Route exact component={Shop} path="/shop"></Route>
      </Switch>
    </div>
  );
}

export default App;
