import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact component={Homepage} path="/"></Route>
      </Switch>
    </div>
  );
}

export default App;
