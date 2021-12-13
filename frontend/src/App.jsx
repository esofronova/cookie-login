import Login from "./Components/Login";
import Welcome from "./Components/Welcome";
import { BrowserRouter as Router, Switch, Route, Redirect, } from "react-router-dom";
import { useState } from "react";

export default function App() {

  let [cookie, setCookie] = useState(document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1"));

  console.log(cookie);

  return (
    <div className="container py-5">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/welcome">
            <Welcome user={cookie} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};