import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Welcome from "./Components/Welcome";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

export default function App() {

  let cookie = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");

  let user = cookie !== '' ? cookie : null;

  return (
    <div className="container py-5">
      <Router>
        <Switch>
          <Route exact path="/">
            {user !== null ? <Redirect to="/welcome" /> : <Login />}
          </Route>
          <Route exact path="/welcome">
            {user !== null ? <Welcome user={user} /> : <Redirect to="/" />}
          </Route>
          <Route exact path="/register">
            {user !== null ? <Redirect to="/welcome" /> : <Signup />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
};