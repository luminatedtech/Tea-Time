import NavBar from "./NavBar";
import Home from "./Home";
import React from "react";
import {Route,Switch} from "react-router-dom"

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route exact path = "/">
          <Home/>
        </Route>
        <Route exact path = "/about">
          <About/>
        </Route>
        <Route exact path = "/teas">
          <Teas/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
