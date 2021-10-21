import React from "react";
import Main from "./layouts/main";
import Edit from "./layouts/edit";
import Card from "./components/card";
import { Route, Switch, Redirect } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/edit" component={Edit} />
        <Route path="/card" component={Card} />
        <Redirect from="/main" to="/" />
      </Switch>
    </>
  );
}
export default App;
